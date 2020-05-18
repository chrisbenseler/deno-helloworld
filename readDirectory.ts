

const dirPath = './samples';
for await (const dirEntry of Deno.readDir(dirPath)) {
   console.log(dirEntry.name);
}
