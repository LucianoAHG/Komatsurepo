import React from 'react';

function seccionPorcentajes() {
  return (
    <>
      <div className="row">
        <div className="col-lg-2">
          <div className="text-center">
            <div style={{ padding: 0 }}>
              <h5>Engaged conversations</h5>
            </div>
            <div>
              <h1 id="engaged-conversations">83</h1>
            </div>
            <div>
              <p>0.0%</p>
            </div>
          </div>
        </div>
        <div className="col-lg-2">
          <div className="text-center">
            <div style={{ padding: 0 }}>
              <h5>Avg. conversation han...</h5>
            </div>
            <div>
              <h1 id="avg-conversation-han">6.4</h1>
            </div>
            <div>
              <p>0.0%</p>
            </div>
          </div>
        </div>
        <div className="col-lg-2">
          <div className="text-center">
            <div style={{ paddingBottom: 22 }}>
              <h5>Avg. CSAT</h5>
            </div>
            <div>
              <h1 id="avg-csat">3.1</h1>
            </div>
            <div>
              <p>0.0%</p>
            </div>
          </div>
        </div>
        <div className="col-lg-2">
          <div className="text-center">
            <div style={{ padding: 0 }}>
              <h5>Avg. conversation sent...</h5>
            </div>
            <div>
              <h1 id="avg-conversation-sent">57.7%</h1>
            </div>
            <div>
              <p>0.0%</p>
            </div>
          </div>
        </div>
        <div className="col-lg-2">
          <div className="text-center">
            <div style={{ padding: 0 }}>
              <h5>Avg. customer effort ti...</h5>
            </div>
            <div>
              <h1>7.5</h1>
            </div>
            <div>
              <p>0.0%</p>
            </div>
          </div>
        </div>
        <div className="col-lg-2">
          <div className="text-center">
            <div style={{ paddingBottom: 22 }}>
              <h5>Transfer rate</h5>
            </div>
            <div>
              <h1>0.0%</h1>
            </div>
            <div>
              <p>0.0%</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default seccionPorcentajes;
