/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A representation single calculator
 */
export interface Calculator {
  /**
   * UUID
   */
  id: string;
  /**
   * Election's name
   */
  name: string;
  /**
   * Longer description
   */
  description: string;
  /**
   * Show on HP start - ISO 8601
   */
  on_hp_from?: string;
  /**
   * Show on HP end - ISO 8601
   */
  on_hp_to?: string;
  election: Election;
  /**
   * List of questions
   */
  questions: Question[];
  /**
   * List of candidates
   */
  candidates: Candidate[];
  /**
   * List of answers
   */
  answers: CandidateAnswer[];
  [k: string]: unknown;
}
/**
 * A representation of election
 */
export interface Election {
  /**
   * UUID
   */
  id: string;
  /**
   * Key used in path/url
   */
  key: string;
  /**
   * Election's name
   */
  name: string;
  /**
   * Longer description
   */
  description: string;
  /**
   * Election start - ISO 8601
   */
  from?: string;
  /**
   * Election end - ISO 8601
   */
  to?: string;
  /**
   * Election type
   */
  type?: 'senatni' | 'prezidentske' | 'snemovni' | 'krajske' | 'municipalni';
  [k: string]: unknown;
}
/**
 * A representation of single question
 */
export interface Question {
  /**
   * UUID
   */
  id: string;
  /**
   * UUID
   */
  name: string;
  /**
   * Text of the question
   */
  title: string;
  /**
   * Shorter explanation of the question
   */
  gist: string;
  /**
   * Longer explanation of the question
   */
  detail: string;
  /**
   * Tags for the question
   */
  tags?: string[];
  [k: string]: unknown;
}
/**
 * A representation of candidate
 */
export interface Candidate {
  /**
   * UUID
   */
  id: string;
  /**
   * Candidate's name
   */
  name: string;
  /**
   * Candidate type
   */
  type: 'party' | 'coalition' | 'person';
  /**
   * Longer description.
   */
  description: string;
  /**
   * Image
   */
  img_url?: string;
  contact?: Contact;
  /**
   * If the type is party, then this array should have single element. If the type is coalition, then there should be multiple parties. If the type is party, then there should be at most one party.
   */
  parties?: Party[];
  [k: string]: unknown;
}
/**
 * A representation of contact
 */
export interface Contact {
  /**
   * Websites
   */
  webs?: {
    /**
     * URL
     */
    url: string;
    /**
     * Label for the URL
     */
    label?: string;
    [k: string]: unknown;
  }[];
  /**
   * Emails
   */
  emails?: {
    /**
     * email
     */
    email: string;
    /**
     * Label for the email
     */
    label?: string;
    [k: string]: unknown;
  }[];
  /**
   * Twitter handle
   */
  twitter?: string;
  /**
   * Instagram handle
   */
  instagram?: string;
  /**
   * Facebook handle
   */
  facebook?: string;
  /**
   * Tiktok handle
   */
  tiktok?: string;
  [k: string]: unknown;
}
/**
 * A representation of party
 */
export interface Party {
  /**
   * UUID
   */
  id: string;
  /**
   * Party name
   */
  name: string;
  /**
   * Longer description.
   */
  description: string;
  /**
   * abbreviation
   */
  abbreviation?: string;
  /**
   * Image
   */
  img_url?: string;
  contact?: Contact;
  [k: string]: unknown;
}
/**
 * A representation of answers for given candidate to questions
 */
export interface CandidateAnswer {
  /**
   * UUID
   */
  id: string;
  /**
   * Candidate's UUID
   */
  candidate_id: string;
  /**
   * Question's UUID
   */
  question_id: string;
  /**
   * Answer on given question
   */
  answer?: 'yes' | 'no';
  /**
   * Candidate's comment related to their answer.
   */
  comment?: string;
  [k: string]: unknown;
}