import React from 'react';

import {FormattedMessage} from 'react-intl';

import {main} from './try.module.scss';

export const Try = () => {
  return (
    <section>
      <div className={main}>
        <p>
          <FormattedMessage
            id="pricing.try.text"
            values={{
              tryLink: (
                <a href="https://app.deckdeckgo.com" rel="noopener noreferrer">
                  <FormattedMessage id="pricing.try.link" />
                </a>
              )
            }}
          />
        </p>
      </div>
    </section>
  );
};
