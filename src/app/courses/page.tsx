import CoursesClient from './CoursesClient';
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return getPageMetadata('/courses', {
    title: "Courses | Chyweb Academy",
    description: "Learn more about Courses at Chyweb Academy."
  });
}

export default function CoursesPage() {
  return <CoursesClient />;
}
