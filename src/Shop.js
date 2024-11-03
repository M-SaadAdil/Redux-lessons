import React from 'react'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {actionCreators} from './state/index'

const Shop = () => {
  const dispatch = useDispatch()
  const {depositMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch)

  return (
    <div className='mt-2 d-flex justify-content-center '>
      <div class="d-flex flex-column">
        <h2 className='p-2'>Deposit/Withdraw Money</h2>
        <div className="d-flex justify-content-center">
          <button className='btn btn-primary mx-2' onClick={()=>{withdrawMoney(100)}}>-</button>
          <h6 className='p-1'>Update Balance</h6>
          <button className='btn btn-primary mx-2' onClick={()=>{depositMoney(100)}}>+</button>
      </div>
      </div>
    </div>
  )
}

export default Shop
