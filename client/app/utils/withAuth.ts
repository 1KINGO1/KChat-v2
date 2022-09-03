import {GetServerSidePropsContext, PreviewData} from 'next';
import {ParsedUrlQuery} from 'querystring';
import * as cookie from 'cookie';
import authService from '@/services/auth';
import {serialize} from 'cookie';

interface Auth {
  redirectUrl: string,
  tokenVerify: (token: string) => boolean
}

const withAuth = ({
                    redirectUrl,
                    tokenVerify
                  }: Auth) => {
  return async (context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>) => {
    const {token} = cookie.parse(context.req.headers.cookie || '');

    /*
      Call tokenVerify callback.
      If tokenVerify => false then make redirect
    */
    if (!tokenVerify(token)){
      return {
        redirect: {
          destination: redirectUrl,
          permanent: false,
        }
      }
    }

    /*
      If token doesn't exist then we won't verify that
    */
    if (!token) {
      return {props: {}};
    }

    /*
      Check token validity
    */
    const data = await authService.verifyToken(token);
    /*
      If token is invalid delete cookie & redirect
    */
    if (data?.err) {
      context.res.setHeader('Set-Cookie', [
        serialize('token', '', {
          maxAge: -1,
          path: '/',
        })
      ]);
      return {
        redirect: {
          destination: redirectUrl,
          permanent: false,
        }
      }
    }
    return {props: {}}
  }
}

export default withAuth;