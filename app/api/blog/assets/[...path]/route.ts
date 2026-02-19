import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(
    request: NextRequest,
    { params }: { params: { path: string[] } }
) {
    // Use await for params in Next.js 15+ if needed, but here we assume standard pattern
    const assetPath = params.path;
    const filePath = path.join(process.cwd(), 'content/blog', ...assetPath);

    // Security check: ensure the file is within the content/blog directory
    const resolvedBase = path.resolve(process.cwd(), 'content/blog');
    const resolvedPath = path.resolve(filePath);

    if (!resolvedPath.startsWith(resolvedBase)) {
        return new NextResponse('Forbidden', { status: 403 });
    }

    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
        return new NextResponse('Not Found', { status: 404 });
    }

    const fileBuffer = fs.readFileSync(filePath);
    const extension = path.extname(filePath).toLowerCase();

    const contentTypes: Record<string, string> = {
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.gif': 'image/gif',
        '.webp': 'image/webp',
        '.svg': 'image/svg+xml',
    };

    const contentType = contentTypes[extension] || 'application/octet-stream';

    return new NextResponse(fileBuffer, {
        headers: {
            'Content-Type': contentType,
            'Cache-Control': 'public, max-age=31536000, immutable',
        },
    });
}
