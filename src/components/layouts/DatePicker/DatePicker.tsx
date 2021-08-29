import React from 'react'
import BasicDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { addFewDays } from '../../../helpers/addFewDays'

const nowDate = new Date()

const getMaxDate = (date: Date) => {
  return addFewDays(date, 30)
}

export type DatePickerValueType = (Date | null)[] | null

interface Props {
  value: DatePickerValueType
  onChange: (date: DatePickerValueType) => void
  className?: string
}

export const DatePicker = ({ value, onChange, className }: Props) => {
  const [startDate, endDate] = value ?? [null, null]

  const handleChange = (dates: Date | DatePickerValueType) => {
    if (dates instanceof Date) {
      // because of selectsRange props it will never happen
      return
    }
    onChange(dates as DatePickerValueType)
  }

  return (
    <BasicDatePicker
      className={className}
      selected={startDate}
      startDate={startDate}
      endDate={endDate}
      onChange={handleChange}
      minDate={nowDate}
      maxDate={startDate ? getMaxDate(startDate) : undefined}
      isClearable
      selectsRange
      inline
    />
  )
}
