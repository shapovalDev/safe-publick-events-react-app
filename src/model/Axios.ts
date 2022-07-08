export enum UrlRequest {
  LoginURL = 'http://localhost:5000/auth/login',
  RegistrationURL = 'http://localhost:5000/auth/register',
  CreateEvent = 'http://localhost:5000/event',
  DeleteEvent = 'http://localhost:5000/event/',
  GetAllEventsByUser = 'http://localhost:5000/event',
  SendRequest = 'http://localhost:5000/event/request/',
  GetUserProfile = 'http://localhost:5000/user',
  EditUserProfile = 'http://localhost:5000/user',
  GetAllEventForSecurity = 'http://localhost:5000/event/security/list',
}
