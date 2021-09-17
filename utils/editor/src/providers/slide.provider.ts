import {Slide} from '../models/data/slide';

export interface GetSlide {
  (deckId: string, slideId: string): Promise<Slide>;
}

export interface UpdateSlide {
  (deckId: string, slide: Slide): Promise<void>;
}

export interface DeleteSlide {
  (deckId: string, slideId: string): Promise<void>;
}