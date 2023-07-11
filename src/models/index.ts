import { MaupassProfile } from "../redux/types";

interface ImageData {
  // @ts-ignore
  data?: any;
  id: number;
  attributes: {
    name: string;
    alternativeText?: string;
    caption?: string;
    width?: number;
    height?: number;
    formats?: {
      large: {
        ext: string;
        url: string;
        hash: string;
        mime: string;
        name: string;
        path: null;
        size: number;
        width: number;
        height: number;
      };
      small: {
        ext: string;
        url: string;
        hash: string;
        mime: string;
        name: string;
        path: null;
        size: number;
        width: number;
        height: number;
      };
      medium: {
        ext: string;
        url: string;
        hash: string;
        mime: string;
        name: string;
        path: null;
        size: number;
        width: number;
        height: number;
      };
      thumbnail: {
        ext: string;
        url: string;
        hash: string;
        mime: string;
        name: string;
        path: null;
        size: number;
        width: number;
        height: number;
      };
    };
    hash?: string;
    ext?: string;
    mime?: string;
    size?: number;
    url: string;
    previewUrl?: null;
    provider?: string;
    provider_metadata?: null;
    createdAt?: string;
    updatedAt?: string;
  };
}

export interface Scheme {
  id: number;
  attributes: {
    title: string;
    subtitle: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    image: {
      data: ImageData[];
    };
  };
}

export interface TextSelection {
  id: number;
  label: string;
  default?: string;
  maupass?: MaupassProfile;
}

export interface PhoneSelection {
  id: number;
  label: string;
}

export interface NumberSelection {
  id: number;
  label: string;
  min_length: number;
  max_length: number;
}

export interface Choice {
  id: number;
  label: string;
}

export interface ChoiceSelection {
  id: number;
  label: string | null;
  choices: Choice[];
}

export interface Section {
  id: number;
  panel_title: string;
  text_selection: TextSelection[];
  phone_selection: PhoneSelection[];
  number_selection: NumberSelection[];
  choice_selection: ChoiceSelection[];
}

export interface FormLayout {
  id: number;
  createdAt: string;
  updatedAt: string;
  terms_and_condition: string;
  section: Section[];
}
