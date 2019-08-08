import React from 'react';
import logo from './logo.svg';
import './App.css';
import Page from '../../ui/page/page'
import Header from '../../components/shared/navbar/index'
import Button from '../../ui/button'
import Innovation from './innovation'
import Features from './features/index'

function Landing() {
  return (
    <Page>
      <Header theme='dark'>
          <div className='CTA'>
            <h1 className='Title'>Elastos means accelerated software development</h1>
            <h2 className='Subtitle'>Set up your first scalable app in the cloud in just 45 seconds</h2>
            
            <Button primary >Find out more</Button>

            <div className='Separator' data-after='or' />

            <p>
              Ready to build? <a href='https://docs.syncano.io/#/cli-reference/installation'>Get in touch</a>, <br /> the rest you can be worked out from there.
            </p>
            <p>
              Edit <code>src/views/landing/index.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </div>
      </Header>
      <Features />
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
