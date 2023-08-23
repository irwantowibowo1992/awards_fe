// import React, { useState } from 'react';
// import CloseIcon from '@mui/icons-material/Close';
// import './Filter.css';
// import { Button, Checkbox, Slider, Typography } from '@mui/material';
// import Gap from '../common/Gap';

// import { useAppStore } from '../../store/AppStore';
// import { shallow } from 'zustand/shallow';

// const Filter = () => {
//   const [awards, getAwards, filter, setFilter] = useAppStore(
//     (state) => [state.awards, state.getAwards, state.filter, state.setFilter],
//     shallow
//   );

//   console.log('Filter global state', filter);

//   const [range, setRange] = useState(100000);
//   const [maxRange] = useState(500000);
//   const [minRange] = useState(10000);
//   const [combineArray, setCombineArray] = useState('');

//   const [checkType, setCheckType] = useState([
//     { id: 0, label: 'All type', isChecked: false, query: 'all' },
//     { id: 1, label: 'Vouchers', isChecked: false, query: 'voucher' },
//     { id: 2, label: 'Products', isChecked: false, query: 'product' },
//     { id: 3, label: 'Others', isChecked: false, query: 'other' },
//   ]);

//   const changeRange = (event) => {
//     setRange(event.target.value);
//   };

//   const handleCheckbox = (id) => {
//     const updatedCheckboxes = checkType.map((checkbox) =>
//       checkbox.id === id
//         ? { ...checkbox, isChecked: !checkbox.isChecked }
//         : checkbox
//     );
//     setCheckType(updatedCheckboxes);
//   };

//   const combineFilter = (checkboxes, range) => {
//     let combineArr = [];

//     if (range !== null) {
//       const newObj = { pointFrom: minRange, pointTo: range };
//       combineArr.push(newObj);
//     }
//     if (Array.isArray(checkboxes)) {
//       const typeCombined = checkType
//         .filter((item) => item.isChecked && item.query !== 'all')
//         .map((item) => item.query)
//         .join(', ');

//       combineArr.push({ category: typeCombined });
//     }

//     const dataToUpdateState = combineArr.reduce((prev, next) =>
//       Object.assign(prev, next)
//     );

//     setCombineArray(dataToUpdateState);
//   };

//   const handleAllTypeChange = (e) => {
//     setCheckType(
//       checkType.map((item) => {
//         item.isChecked = e.target.checked;
//         return item;
//       })
//     );
//   };

//   const handleReset = () => {
//     setRange(10000);
//     setCheckType([
//       { id: 0, label: 'All type', isChecked: false, query: 'all' },
//       { id: 1, label: 'Vouchers', isChecked: false, query: 'voucher' },
//       { id: 2, label: 'Products', isChecked: false, query: 'product' },
//       { id: 3, label: 'Others', isChecked: false, query: 'other' },
//     ]);
//   };

//   const handelSubmit = (e) => {
//     e.preventDefault();
//     combineFilter(checkType, range);

//     console.log('Hasil combine array ====>', combineArray);
//   };

//   console.log('Hasil combine array 2 ====>', combineArray);

//   return (
//     <div className="filter">
//       <div className="filter_header">
//         <span>Filter</span>
//         <CloseIcon className="filter_header_close" />
//       </div>
//       <div className="filter_content">
//         {range !== minRange ? (
//           <div className="filter_content_item">
//             <span>Point: 10000 - 50000</span>
//             <CloseIcon className="filter_content_item_close" />
//           </div>
//         ) : (
//           ''
//         )}
//         <Gap x={15} />
//         {checkType.some((item) => item.isChecked) ? (
//           <div className="filter_content_item">
//             <span>
//               Type:{' '}
//               {checkType
//                 .filter((item) => item.isChecked && item.query !== 'all')
//                 .map((item) => item.label)
//                 .join(', ')}
//             </span>
//             <CloseIcon className="filter_content_item_close" />
//           </div>
//         ) : (
//           ''
//         )}

//         <Gap x={10} />
//         {range !== minRange && checkType.some((item) => item.isChecked) ? (
//           <Button variant="outlined" onClick={handleReset}>
//             Clear All Filter
//           </Button>
//         ) : (
//           ''
//         )}

//         <form onSubmit={handelSubmit}>
//           <div className="filter_range">
//             <span>Poin Needed</span>
//             <div className="filter_range_content">
//               <Typography id="non-linear-slider" gutterBottom>
//                 Your select is IDR {range}
//               </Typography>
//               <Slider
//                 value={range}
//                 min={minRange}
//                 step={10000}
//                 max={maxRange}
//                 // scale={calculateValue}
//                 // getAriaValueText={valueLabelFormat}
//                 // valueLabelFormat={valueLabelFormat}
//                 onChange={changeRange}
//                 valueLabelDisplay="auto"
//                 aria-labelledby="non-linear-slider"
//               />
//             </div>
//           </div>
//           <div className="filter_type">
//             <span>Award Type</span>
//             <div className="filter_type_list">
//               {checkType.map((checkbox) => (
//                 <div className="filter_type_list_checkbox">
//                   <input
//                     key={checkbox.id}
//                     type="checkbox"
//                     defaultChecked={checkbox.isChecked}
//                     onChange={
//                       checkbox.query === 'all'
//                         ? handleAllTypeChange
//                         : () => handleCheckbox(checkbox.id)
//                     }
//                   />
//                   <span>{checkbox.label}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="filter_submit">
//             <Button
//               type="submit"
//               variant="contained"
//               className="filter_submit_button"
//             >
//               Submit
//             </Button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Filter;

import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import './Filter.css';
import Checkbox from '../../components/checkbox/Checkbox';

import { useFilter } from '../../context/FilterContext';
function Filter() {
  const navigate = useNavigate();
  const [range, setRange] = useState(100000);
  const [maxRange] = useState(500000);
  const [minRange] = useState(10000);
  const [combineArray, setCombineArray] = useState('');

  const { filter, setFilter } = useFilter();

  console.log('Ini apa ya ====>', filter);

  const [checkType, setCheckType] = useState([
    { id: 0, label: 'All', isChecked: false, query: 'all' },
    { id: 1, label: 'Vouchers', isChecked: false, query: 'voucher' },
    { id: 2, label: 'Products', isChecked: false, query: 'product' },
    { id: 3, label: 'Others', isChecked: false, query: 'other' },
  ]);

  const changeRange = (event) => {
    setRange(event.target.value);
    setFilter({ ...filter, pointFrom: minRange, pointTo: event.target.value });
  };

  const handleCheckbox = (id) => {
    const updatedCheckboxes = checkType.map((checkbox) =>
      checkbox.id === id
        ? { ...checkbox, isChecked: !checkbox.isChecked }
        : checkbox
    );
    setCheckType(updatedCheckboxes);
  };

  const combineFilter = (checkboxes, range) => {
    let combineArr = [];

    if (range !== null) {
      const newObj = { pointFrom: minRange, pointTo: range };
      combineArr.push(newObj);
    }
    if (Array.isArray(checkboxes)) {
      const typeCombined = checkType
        .filter((item) => item.isChecked && item.label !== 'All')
        .map((item) => item.label)
        .join(',');

      combineArr.push({ category: typeCombined });
    }

    const dataToUpdateState = combineArr.reduce((prev, next) =>
      Object.assign(prev, next)
    );

    setCombineArray(dataToUpdateState);
    setFilter({ ...filter, category: dataToUpdateState.category });
    console.log('Anuuu ====>', filter);
  };

  const handleAllTypeChange = (e) => {
    setCheckType(
      checkType.map((item) => {
        item.isChecked = e.target.checked;
        return item;
      })
    );
  };

  const handleReset = () => {
    setRange(10000);
    setCheckType([
      { id: 0, label: 'All type', isChecked: false, query: 'all' },
      { id: 1, label: 'Vouchers', isChecked: false, query: 'voucher' },
      { id: 2, label: 'Products', isChecked: false, query: 'product' },
      { id: 3, label: 'Others', isChecked: false, query: 'other' },
    ]);
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    combineFilter(checkType, range);

    console.log('data yang dikirim ====>', filter);

    // navigate('/home', { state: filter, replace: true });
    navigate('/home', { state: filter, replace: true });
  };

  return (
    <div className="filter">
      <div className="filter_header">
        <div className="filter_header_title">
          <span>Filter</span>
        </div>
        <div className="filter_header_close">
          <Link to="/">
            <IoMdClose size={30} />
          </Link>
        </div>
      </div>
      <div className="filter_content_checkbox">
        <div className="row">
          {range !== minRange ? (
            <div className="chip">
              Point: 10000 - {range}
              <IoMdClose />
            </div>
          ) : (
            ''
          )}

          {checkType.some((item) => item.isChecked) ? (
            <div className="chip">
              Type:{' '}
              {checkType
                .filter((item) => item.isChecked && item.query !== 'all')
                .map((item) => item.label)
                .join(', ')}
              <IoMdClose style={{ marginLeft: '10px', alignItems: 'center' }} />
            </div>
          ) : (
            ''
          )}
        </div>
        {range !== minRange && checkType.some((item) => item.isChecked) ? (
          <button
            className="waves-effect waves-light btn blue"
            onClick={handleReset}
          >
            Clear all filter
          </button>
        ) : (
          ''
        )}
      </div>
      <div className="filter_content">
        <form onSubmit={handelSubmit}>
          <div className="filter_content_point">
            <span className="filter_content_point_title">Point Needed</span>
            <div className="filter_content_point_title_range">
              <span>IDR {minRange}</span>
              <span>IDR {maxRange}</span>
            </div>
            <input
              type="range"
              onChange={changeRange}
              min={minRange}
              max={maxRange}
              step={10000}
              value={range}
              className="point_range"
            ></input>
            <div className="point_value">
              <span>Your select is IDR {range}</span>
            </div>
          </div>

          <div className="type">
            <span className="filter_content_point_title">Award Type</span>
            <div className="type_list">
              {checkType.map((checkbox) => (
                <Checkbox
                  key={checkbox.id}
                  label={checkbox.label}
                  isChecked={checkbox.isChecked}
                  onChange={
                    checkbox.query === 'all'
                      ? handleAllTypeChange
                      : () => handleCheckbox(checkbox.id)
                  }
                />
              ))}
            </div>
          </div>
          <div className="btn_submit_container">
            <button className="waves-effect waves-light btn btn_submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Filter;
