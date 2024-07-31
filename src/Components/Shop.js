import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionCreators } from '../state'
import { bindActionCreators } from 'redux'; 



const Shop = () => {
  const dispatch = useDispatch();
  const amount = useSelector((state) => state.amount);
  const { WithdrawMoney, depositMoney } = bindActionCreators(actionCreators, dispatch);
  return (
    <div className='container'>
      <h1>Deposit/Withdraw</h1>
      {/* <button className='btn btn-primary mx-2' onClick={()=> dispatch(actionCreators.WithdrawMoney(100))}>-</button>
      Update Balance
      <button className='btn btn-primary mx-2' onClick={()=> dispatch(actionCreators.depositMoney(100))}>+</button> */}

      <button className='btn btn-primary mx-2' onClick={() => WithdrawMoney(100)}>-</button>
      Update Balance : {amount}
      <button className='btn btn-primary mx-2' onClick={() => depositMoney(100)}>+</button>
    </div>
  )
}

export default Shop
