import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { formatDate, formatDateAbsolute } from "../utils/commonFunction";
import cn from "classnames";

import style from "./india.module.css";

const India = ({ data }) => {
  const [smShow, setSmShow] = useState(false);

  return (
    <>
      {data.loading ? (
        <>
          <Button
            onClick={() => setSmShow(true)}
            variant={"btn btn-sm btn-danger"}
            className={cn(style.button)}
          >
            India
          </Button>
          <Modal
            size="lg"
            show={smShow}
            onHide={() => setSmShow(false)}
            aria-labelledby="example-modal-sizes-title-sm"
            centered
          >
            <Modal.Header closeButton className="text-info">
              <Modal.Title>All Over India</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div
                className="text-warning"
                style={{ fontSize: "14px", fontWeight: 800 }}
              >
                <p className="text-center">
                  Last Update:{" "}
                  {isNaN(Date.parse(formatDate(data.lastupdatetime)))
                    ? ""
                    : formatDateAbsolute(data.lastupdatetime)}
                </p>
              </div>

              <div className={style.container}>
                <div className={style.counter}>
                  <div className={style.confirm}>
                    <h5 className={style.confirm_name}>Confirmed</h5>
                    <h4 className={style.h4}>
                      [ +{(data.indDeltaConfirmed / 2).toLocaleString("en-IN")}{" "}
                      ]
                    </h4>
                    <h1 className={style.h1}>
                      {(data.indConfirmed / 2).toLocaleString("en-IN")}
                    </h1>
                  </div>
                </div>

                <div className={style.counter}>
                  <div className={style.active}>
                    <h5 className={style.active_name}>Active</h5>
                    <h4 className={style.h4}>&nbsp;</h4>
                    <h1 className={style.h1}>
                      {(data.indActive / 2).toLocaleString("en-IN")}
                    </h1>
                  </div>
                </div>

                <div className={style.counter}>
                  <div className={style.recover}>
                    <h5 className={style.recover_name}>Recovered</h5>
                    <h4 className={style.h4}>
                      [ +{(data.indDeltaRecovered / 2).toLocaleString("en-IN")}{" "}
                      ]
                    </h4>
                    <h1 className={style.h1}>
                      {(data.indRecovered / 2).toLocaleString("en-IN")}
                    </h1>
                  </div>
                </div>

                <div className={style.counter}>
                  <div className={style.deaths}>
                    <h5 className={style.deaths_name}>Deaths</h5>
                    <h4 className={style.h4}>
                      [ +{(data.indDeltaDeaths / 2).toLocaleString("en-IN")} ]
                    </h4>
                    <h1 className={style.h1}>
                      {(data.indDeaths / 2).toLocaleString("en-IN")}
                    </h1>
                  </div>
                </div>
              </div>

              <div
                className="text-center text-blue"
                style={{
                  fontWeight: 700,
                }}
              >
                <p>
                  Total Tested:{" "}
                  {parseInt(data.indTested).toLocaleString("en-IN")}
                </p>
              </div>
            </Modal.Body>
          </Modal>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default India;
