export function getFileExtension(url: string) {
  // Create a URL object to safely handle URL parsing
  const parsedUrl = new URL(url);

  // Get the pathname from the URL
  const pathname = parsedUrl.pathname;

  // Extract the file extension from the pathname
  const extension = pathname.split('.').pop();

  // Check if the extension is valid (i.e., it's not the URL itself or empty)
  return extension && extension !== pathname ? extension : null;
}
