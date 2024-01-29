import React from 'react';

// import { useTheme } from '@mui/material/styles';

function sectionInputs() {
  //   const theme = useTheme();
  const optionStyle = {
    fontSize: '15px',
    color: 'grey'
  };
  return (
    <>
      <div className="row">
        <div className="col-md-4 col-xs-12">
          <span style={{ color: '#6a6c6f', fontSize: '13px', fontWeight: 700 }}>Nombre</span>
          <input className="form-control" type="text" id="nombreScript" />
        </div>
        <div className="col-md-4 col-xs-12">
          <span style={{ color: '#6a6c6f', fontSize: '13px', fontWeight: 700 }}>Funnel Comercial</span>
          {/* <Select
                            style={{ width: '100%' }}
                            labelId="demo-multiple-name-label"
                            id="demo-multiple-name"
                            value={optionfunnel}
                            onChange={handleChangeOptionFunnel}
                            input={<OutlinedInput label="Funnel Comercial" />}
                            MenuProps={MenuProps}
                          >
                            {optionFunnel.map((funnel) => (
                              <MenuItem key={funnel} value={funnel} style={getStyles(funnel, optionfunnel, theme)}>
                                {funnel}
                              </MenuItem>
                            ))}
                          </Select> */}

          <select className="form-control" id="cmboxFunnel" defaultValue={-1}>
            <option style={optionStyle} value={1}>
              Cotización
            </option>
            <option style={optionStyle} value={2}>
              Correo
            </option>
            <option style={optionStyle} value={3}>
              Compra
            </option>
            <option style={optionStyle} value={4}>
              Up Sell
            </option>
            <option style={optionStyle} value={5}>
              Reclamo
            </option>
            <option style={optionStyle} value={6}>
              Up Sell
            </option>
            <option style={optionStyle} value={7}>
              hi
            </option>
          </select>
        </div>
        <div className="col-md-4 col-xs-12">
          <span style={{ color: '#6a6c6f', fontSize: '13px', fontWeight: 700 }}>Canal</span>
          {/* <Select
                            style={{ width: '100%', borderRadius: 0, backgroundColor: 'white' }}
                            labelId="demo-multiple-name-label"
                            id="demo-multiple-name"
                            value={optioncanal}
                            onChange={HandlerChangeOptionCanal}
                            input={<OutlinedInput label="Canal" />}
                            MenuProps={MenuProps}
                          >
                            {optionCanal.map((canal) => (
                              <MenuItem key={canal} value={canal} style={getStyles(canal, optioncanal, theme)}>
                                {canal}
                              </MenuItem>
                            ))}
                          </Select> */}
          <select className="form-control" id="cmboxCanal" defaultValue={-1}>
            <option style={optionStyle} value={1}>
              Correo
            </option>
            <option style={optionStyle} value={2}>
              Sms
            </option>
            <option style={optionStyle} value={3}>
              Whatsapp
            </option>
            {/* onChange="copiaCorreos()" */}
          </select>
        </div>
      </div>
    </>
  );
}

export default sectionInputs;
