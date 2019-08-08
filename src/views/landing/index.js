import React from 'react';
import logo from './logo.svg';
import './App.css';
import Page from '../../ui/page/page'
import Header from '../../components/shared/navbar/index'
import Button from '../../ui/button'
import Innovation from './innovation'
import Features from './features/index'
// import Sockets from './sockets/index'
import ReactRotatingText from 'react-rotating-text'

function Landing() {
  return (
    <Page>
      <Header theme='dark'>
          <div className='CTA'>
            <h1 className='Title'>Is your business ready for the internet of tomorrow?</h1>
            <h2 className='Subtitle'>Build your first decentralized application on Elastos</h2>
            
            <Button primary >Find out more</Button>

            <div className='Separator' data-after='or' />

            <p className='Secondary__CTA'>
              Ready to build? <a href='https://docs.syncano.io/#/cli-reference/installation'>Get in touch</a>, <br /> the rest you can be worked out from there.
            </p>
            {/* <div className='Project'>
              <h2 className='Project__headline'>Assemble your backend from Syncano Sockets to build your</h2>
              <p className='Project__title'>
                <ReactRotatingText
                  items={[
                    ' fintech innovation solution',
                    ' messenger bot',
                    ' mobile backend',
                    ' custom CMS',
                    ' analytics integration',
                    ' IoT backend',
                    ' payment gateway',
                    ' web hosting solution',
                    '... basically, whatever...'
                  ]} />
              </p>
            </div> */}
          </div>
      </Header>
      <Features />
      {/* <Sockets /> */}

      <style jsx>{`
      /* = CTA
       * ==================================================================== */
      .CTA {
        text-align: center;
        margin-top: 30px;
      }

      .CTA a {
        color: #fff;
        font-weight: 500;
        text-decoration: none;
        cursor: pointer;
      }

      .CTA a:hover {
        text-decoration: underline;
      }

      .CTA p {
        color: rgba(255,255,255, .5);
        line-height: 22px;
      }

      .Title {
        max-width: 590px;
        margin-left: auto;
        margin-right: auto;
      }

      .Subtitle {
        max-width: 360px;
        margin-left: auto;
        margin-right: auto;
        font-size: 24px;
        font-weight: 300;
        margin-top: 15px;
        margin-bottom: 30px;
        color: rgba(255,255,255, .5);
      }

      @media screen and (min-width: 980px) {
        .CTA {
          margin-top: 90px;
        }

        .Title {
          font-size: 48px;
          line-height: 56px;
        }
      }

      .Project__headline {
        font-size: 24px;
        font-weight: 300;
        color: rgba(255,255,255, .5);
      }

      .Project__title {
        font-family: Courier;
        font-size: 36px;
        font-weight: normal;
        color: #fff;
        margin-top: 7px;
        min-height: 41px;
      }

      .Secondary__CTA {
        padding-bottom: 25px;
      }
      /* = SEPARATOR
       * ==================================================================== */
      .Separator {
        width: 2px;
        height: 24px;
        opacity: 0.25;
        border: dashed 1px #ffffff;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        margin-bottom: 30px;
        margin-top: 20px;
      }

      .Separator::after {
        content: attr(data-after);
        color: rgba(255,255,255,.75);
        font-weight: 300;
        position: absolute;
        top: 100%;
        margin-top: 5px;
        transform: translateX(-50%);
      }

      /* = CLI
       * ==================================================================== */
      .CLI {
        display: flex;
        justify-content: center;
        margin-top: 40px;
        padding-bottom: 30px;
      }

      .CLI__inner {
        position: relative;
        width: 100%;
        min-height: 398px;
        max-width: 640px;
      }

      @media screen and (min-width: 560px) {
        .CLI :global(>) :global(*) {
          margin-bottom: -80px;
        }
      }

      @media screen and (max-width: 560px) {
        .CLI__inner {
          min-height: 360px;
        }

        .HiddenAtSm {
          display: none;
        }
      }

      @media screen and (max-width: 960px) {
        .HiddenAtMd {
          display: none;
        }
      }
    `}</style>
    </Page>
  );
}

export default Landing;
