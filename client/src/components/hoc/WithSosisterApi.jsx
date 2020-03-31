import React from 'react';
import {SosisterApiConsumer} from '../sosister-api-context';

const WithSosisterApi = (Wrapped) => {
  return (props) => {
    return <SosisterApiConsumer>
      {
        (sosisterApi) => {
          return <Wrapped {...props} sosisterApi={sosisterApi}/>
        }
      }
    </SosisterApiConsumer>
  }
}

export default WithSosisterApi;
