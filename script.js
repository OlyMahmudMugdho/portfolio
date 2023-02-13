const SUPABASE_URL = 'https://fvwtrbpdwxqvavtcudya.supabase.co';
const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ2d3RyYnBkd3hxdmF2dGN1ZHlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYzMDcwMzksImV4cCI6MTk5MTg4MzAzOX0.YEg5U7W9R9NnmPy3vUQSbTVBgz7MqOSCJ84rnxTJNRc'

 supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY)

const send = async () => {
    let nam = document.getElementById("name").value;
    let mail = document.getElementById("email").value;
    let msg = document.getElementById("message").value;
    let res = document.querySelector(".result");
    const { data, error } = await supabase
  .from('messages')
  .insert([
    { name: nam, email: mail , message : msg },
  ])
  res.style.display = "initial";
  res.innerHTML = "";
  res.innerHTML = " Message Sent";
}
