import {ADD, SUB, ADDNUMBER, SUBNUMBER,  ADD2} from './actionsTypes'

export function add() {
    return {
        type: 'ADD'
    }
}

export function sub() {
    return {
        type: 'SUB'
    }
}

export function addNumber(number) {
    return {
        type: 'ADDNUMBER',
        payload: number,
    }
}

export function subNumber(number) {
    return {
        type: 'SUBNUMBER',
        payload: number
    }
}

export function asyncAdd(number) {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(addNumber(number))
        }, 3000)
    }
}

export function add2(number) {
    return {
        type: 'ADD2',
        payload: number
    }
}