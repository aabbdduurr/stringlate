export interface OAuthProfile {
  id: string;
  displayName: string;
  emails?: Array<{ value: string }>;
  provider: string;
}
