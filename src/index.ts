


//  E X P O R T S

export const emailRegex: RegExp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\\.,;:\s@"]{2,})$/i;
export default (email: string): boolean => emailRegex.test(String(email));
