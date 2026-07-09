import { items } from "@wix/data";
import { auth } from "@wix/essentials";

export interface PortfolioProject {
  _id: string;
  name?: string;
  shortDescription?: string;
  priceOrDuration?: string;
  image?: string;
  availability?: string;
  featuredNote?: string;
}

export interface Testimonial {
  _id: string;
  quote?: string;
  name?: string;
  neighborhood?: string;
  context?: string;
}

export interface FaqItem {
  _id: string;
  question?: string;
  answer?: string;
}

export interface AboutContent {
  _id: string;
  title?: string;
  body?: unknown;
}

async function queryAll<T>(collectionId: string, limit = 50): Promise<T[]> {
  try {
    const elevatedQuery = auth.elevate(items.query);
    const { items: results } = await elevatedQuery(collectionId).limit(limit).find();
    return results as T[];
  } catch (err) {
    console.error(`[cms:${collectionId}] query failed:`, err);
    return [];
  }
}

export const getPortfolio = () => queryAll<PortfolioProject>("PortfolioProjects");
export const getTestimonials = () => queryAll<Testimonial>("Testimonials");
export const getFaq = () => queryAll<FaqItem>("FAQ");

export async function getAbout(): Promise<AboutContent | null> {
  const results = await queryAll<AboutContent>("AboutContent", 1);
  return results[0] ?? null;
}
