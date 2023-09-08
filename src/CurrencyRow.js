import React from 'react'

export default function CurrencyRow(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount
  } = props
  return (
    <div style={{display:"flex"}}>
      <input type="number" className=" form-control input" value={amount} onChange={onChangeAmount} />
      <select style={{marginLeft:"3px"}} className="btn btn-primary dropdown-toggle" value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}
