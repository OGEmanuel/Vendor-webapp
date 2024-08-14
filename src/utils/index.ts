import { DaysOfWork } from "@/sdk/vendor";

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



export const DefaultDaysofWork: DaysOfWork= {
  friday: {
    open: '00:00',
    alwaysOpen: true,
    close: '00:00',
  },
  monday: {
    open: '00:00',
    alwaysOpen: true,
    close: '00:00',
  },
  saturday: {
    open: '00:00',
    alwaysOpen: true,
    close: '00:00',
  },
  sunday: {
    open: '00:00',
    alwaysOpen: true,
    close: '00:00',
  },
  thursday: {
    open: '00:00',
    alwaysOpen: true,
    close: '00:00',
  },
  tuesday: {
    open: '00:00',
    alwaysOpen: true,
    close: '00:00',
  },
  wednesday: {
    open: '00:00',
    alwaysOpen: true,
    close: '00:00',
  },
}