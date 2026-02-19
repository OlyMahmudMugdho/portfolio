import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import readingTime from 'reading-time';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface PostMeta {
    title: string;
    slug: string;
    date: string;
    updated?: string;
    excerpt: string;
    category: string;
    tags: string[];
    featured: boolean;
    coverImage?: string;
    author: string;
    readingTime?: string;
}

export interface Post extends PostMeta {
    content: string;
}

export function getPostSlugs() {
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    const getAllFiles = (dirPath: string, arrayOfFiles: string[] = []) => {
        const files = fs.readdirSync(dirPath);

        files.forEach((file) => {
            if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
                arrayOfFiles = getAllFiles(path.join(dirPath, file), arrayOfFiles);
            } else {
                if (file.endsWith('.md')) {
                    const relativePath = path.relative(postsDirectory, path.join(dirPath, file));
                    arrayOfFiles.push(relativePath);
                }
            }
        });

        return arrayOfFiles;
    };

    return getAllFiles(postsDirectory);
}

export async function getPostBySlug(slug: string): Promise<Post> {
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const processedContent = await remark()
        .use(html)
        .process(content);
    let contentHtml = processedContent.toString();

    // Rewrite relative image paths in the HTML content
    const postFolder = path.dirname(realSlug);
    contentHtml = contentHtml.replace(/src="(\.\/)?([^":]+)"/g, (match, dotSlash, filename) => {
        if (filename.startsWith('http') || filename.startsWith('/') || filename.startsWith('data:')) {
            return match;
        }
        const assetPath = postFolder === '.' ? filename : `${postFolder}/${filename}`;
        return `src="/api/blog/assets/${encodeURIComponent(assetPath).replace(/%2F/g, '/')}"`;
    });

    const stats = readingTime(content);

    // Ensure all required fields exist with defaults if missing
    const meta: PostMeta = {
        title: data.title || 'Untitled Post',
        slug: realSlug,
        date: data.date ? (data.date instanceof Date ? data.date.toISOString() : String(data.date)) : new Date().toISOString(),
        excerpt: data.excerpt || '',
        category: data.category || 'Uncategorized',
        tags: Array.isArray(data.tags) ? data.tags : [],
        featured: !!data.featured,
        author: data.author || 'Anonymous',
        coverImage: data.coverImage,
    };

    // Handle cover image if it's a local relative path
    if (meta.coverImage && !meta.coverImage.startsWith('http') && !meta.coverImage.startsWith('/')) {
        const assetPath = postFolder === '.' ? meta.coverImage : `${postFolder}/${meta.coverImage}`;
        meta.coverImage = `/api/blog/assets/${encodeURIComponent(assetPath).replace(/%2F/g, '/')}`;
    }

    return {
        ...meta,
        slug: realSlug,
        content: contentHtml,
        readingTime: stats.text,
    } as Post;
}

export async function getAllPosts(): Promise<PostMeta[]> {
    const slugs = getPostSlugs();
    const posts = await Promise.all(
        slugs.map(async (slug) => {
            const { content, ...meta } = await getPostBySlug(slug);
            return meta;
        })
    );

    // Sort posts by date in descending order
    return posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}

export async function getFeaturedPosts(): Promise<PostMeta[]> {
    const allPosts = await getAllPosts();
    return allPosts.filter((post) => post.featured);
}

export async function getPostsByCategory(category: string): Promise<PostMeta[]> {
    const allPosts = await getAllPosts();
    return allPosts.filter((post) => post.category === category);
}

export async function getPostsByTag(tag: string): Promise<PostMeta[]> {
    const allPosts = await getAllPosts();
    return allPosts.filter((post) => post.tags.includes(tag));
}

export async function getAllCategories(): Promise<string[]> {
    const allPosts = await getAllPosts();
    const categories = allPosts.map((post) => post.category);
    return Array.from(new Set(categories));
}

export async function getAllTags(): Promise<string[]> {
    const allPosts = await getAllPosts();
    const tags = allPosts.flatMap((post) => post.tags);
    return Array.from(new Set(tags));
}

export async function getPaginatedPosts(
    page: number,
    perPage: number,
    category?: string,
    tag?: string
): Promise<{ posts: PostMeta[]; totalPages: number; currentPage: number }> {
    let allPosts = await getAllPosts();

    if (category) {
        allPosts = allPosts.filter((p) => p.category === category);
    }
    if (tag) {
        allPosts = allPosts.filter((p) => p.tags.includes(tag));
    }

    const totalPages = Math.ceil(allPosts.length / perPage);
    const offset = (page - 1) * perPage;
    const paginatedPosts = allPosts.slice(offset, offset + perPage);

    return {
        posts: paginatedPosts,
        totalPages,
        currentPage: page,
    };
}
