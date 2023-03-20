import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between'>
      </section>

      <section style={{ color: 'white' }} >
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4' style={{ textAlign: 'center' }}>

              <h6 className='text-uppercase fw-bold mb-4 mx-auto'>Contact</h6>

              <p>
                <i ></i> New York, NY 10012, US
              </p>
              <p>
                <i ></i>
                plasticK@gmail.com
              </p>
              <p>
                <i ></i> + 01 234 567 88
              </p>
              <p>
                <i ></i> + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        Copyright © 2022 All Rights Reserved by Plastick.
      </div>
    </MDBFooter>
  );
}