export interface Member {
  id: number;
  fullName: string;
  role: string;
  bio: string;
  email: string;
  phone: string;
  message: string;
  profileImg: ImageMetadata;
  alt: string;
}

export interface Testimonial {
  id: number;
  name: string;
  title: string;
  avatar: ImageMetadata;
  city: string;
  country: string;
  quote: string;
  datePosted: string;
}
