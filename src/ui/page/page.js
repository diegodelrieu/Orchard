// import {action} from 'mobx'
// import DevTools from 'mobx-react-devtools'
import React from 'react'
import FontAwesome from './styles/font-awesome'
import Normalize from './styles/normalize'
// import Modal from '../modal'
// import ScrollManager from '../../ui/scroll-manager'
// import ForgotPasswordForm from '../../shared/auth/forgot-password'
// import SetPasswordForm from '../../shared/auth/set-password'
// import SignUpForm from '../../shared/auth/signup'
// import SignInForm from '../../shared/auth/signin'
// import BookMeetingForm from '../../../views/enterprise/components/book-meeting'

const Page = ({children, flags}) => (
  <div>
    {children}

    <FontAwesome />
    <Normalize />

    <style jsx global>{`
      body,
      h1, h2, h3, h4, h5, h6,
      blockquote, p, pre,
      dl, dd, ol, ul,
      figure,
      hr,
      fieldset, legend {
        margin:  0;
        padding: 0;
      }

      h1, h2, h3, h4, h5, h6 {
        line-height: 1.25;
      }

      html {
        font-family: Roboto;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        overflow-y: scroll;
      }

      .AppContainer {
        min-height: 100vh;
        overflow: hidden;
      }

      /* = WRAPPER
      * ==================================================================== */
      .u-wrapper {
        padding-left: 30px;
        padding-right: 30px;
        margin-left: auto;
        margin-right: auto;
      }

      /* = HEADINGS
      * ==================================================================== */
      .u-title {
        color: #0b0f15;
        font-weight: 300;
        font-size: 28px;
        line-height: 36px;
      }

      .u-title + .u-subtitle {
        margin-top: 15px;
      }

      @media screen and (min-width: 560px) {
        .u-title {
          font-size: 48px;
          line-height: 64px;
        }
      }

      .u-subtitle {
        color: #7a7f87;
        font-weight: 300;
        font-size: 20px;
        line-height: 32px;
      }

      @media screen and (min-width: 560px) {
        .u-subtitle {
          font-size: 24px;
        }
      }

      /* = TEXT-ALIGN
      * ==================================================================== */
      .u-ta-c {
        text-align: center;
      }

      .u-ta-r {
        text-align: right;
      }

      a {
        color: #2c59c5;
        cursor: pointer;
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }
    `}</style>
  </div>
)

export default Page
