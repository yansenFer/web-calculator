/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { LuDelete } from "react-icons/lu"
import "./App.css"
import { GiSharpSmile } from "react-icons/gi"

function App() {
  const [tampungValue, setTampungValue] = useState([])
  const [total, setTotal] = useState(0)
  const [view, setView] = useState(0)
  const [operator, setOperator] = useState("")
  const [tampungOperator, setTampungOperator] = useState("")

  useEffect(() => {
    let numberValue = Number(tampungValue.join(""))
    if (tampungValue.length !== 0) {
      setView(numberValue.toString())
      handleOperator(numberValue)
    }
  }, [tampungValue, operator])

  const handleSetValue = (value) => {
    const valueCal = [...tampungValue, value]
    setTampungValue(valueCal)
  }

  const handleBackSpace = () => {
    if (tampungValue.length !== 0) {
      setTampungValue(tampungValue.slice(0, -1))
    }
  }

  const handleOperator = (numberValue) => {
    if (operator === "+") {
      if (operator !== tampungOperator && tampungOperator !== "") {
        handleTampungOperator(numberValue)
      } else {
        setTotal(total + numberValue)
        setTampungOperator(operator)
        setTampungValue([])
        setOperator("")
      }
    }
    if (operator === "-") {
      if (operator !== tampungOperator && tampungOperator !== "") {
        handleTampungOperator(numberValue)
      } else {
        setTotal(numberValue)
        if (total !== 0) {
          setTotal(total - numberValue)
        }
        setTampungOperator(operator)
        setTampungValue([])
        setOperator("")
      }
    }
    if (operator === "*") {
      if (operator !== tampungOperator && tampungOperator !== "") {
        handleTampungOperator(numberValue)
      } else {
        setTotal(total * numberValue)
        setTampungOperator(operator)
        setTampungValue([])
        setOperator("")
      }
    }
    if (operator === "/") {
      if (operator !== tampungOperator && tampungOperator !== "") {
        handleTampungOperator(numberValue)
      } else {
        setTotal(total / numberValue)
        setTampungOperator(operator)
        setTampungValue([])
        setOperator("")
      }
    }
  }

  const handleTampungOperator = (numberValue) => {
    if (tampungOperator === "+") {
      setTotal(total + numberValue)
      setTampungOperator(operator)
      setTampungValue([])
      setOperator("")
    }
    if (tampungOperator === "-") {
      setTotal(numberValue)
      if (total !== 0) {
        setTotal(total - numberValue)
      }
      setTampungOperator(operator)
      setTampungValue([])
      setOperator("")
    }
    if (tampungOperator === "*") {
      setTotal(total * numberValue)
      setTampungOperator(operator)
      setTampungValue([])
      setOperator("")
    }
    if (tampungOperator === "/") {
      setTotal(total / numberValue)
      setTampungOperator(operator)
      setTampungValue([])
      setOperator("")
    }
  }

  const handleClear = () => {
    setTampungValue([])
    setTotal(0)
    setOperator("")
  }

  const handleClearentry = () => {
    setTampungValue([])
  }

  const handleEquals = () => {
    let numberValue = Number(tampungValue.join(""))
    if (tampungOperator === "+") {
      setTotal(total + numberValue)
      setTampungOperator(operator)
      setTampungValue([])
      setOperator("")
    }
    if (tampungOperator === "-") {
      setTotal(numberValue)
      if (total !== 0) {
        setTotal(total - numberValue)
      }
      setTampungOperator(operator)
      setTampungValue([])
      setOperator("")
    }
    if (tampungOperator === "*") {
      setTotal(total * numberValue)
      setTampungOperator(operator)
      setTampungValue([])
      setOperator("")
    }
    if (tampungOperator === "/") {
      setTotal(total / numberValue)
      setTampungOperator(operator)
      setTampungValue([])
      setOperator("")
    }
  }

  return (
    // belum bisa melakukan penjumalahn setelah = dan belum bisa menghitung angka koma
    <div className="flex flex-wrap  w-full h-screen rounded-lg justify-center items-center ">
      <div className="flex flex-col bg-gray-800 border-2 border-yellow-600 shadow-2xl rounded-lg p-10 gap-5 xl:w-[35%] lg:w-[45%] md:w-[50%] sm:w-[55%] w-full shadow-gray-500">
        <span className="self-start">Calculator By Me?</span>
        <div className="border-2 flex flex-col gap-2 bg-gray-500 border-yellow-600 hover:border-yellow-400 duration-200 rounded-lg w-full h-full">
          {total !== 0 ? (
            <span className="font-bold text-yellow-400 justify-end px-2 pt-2 flex w-full">
              {total}
            </span>
          ) : null}
          <span
            className={`text-white justify-end ${
              total !== 0 ? "px-2 pb-2" : "p-2"
            }  flex w-full `}
          >
            {tampungValue.length !== 0 || operator !== "" ? view : 0}
          </span>
        </div>
        <div className="grid w-full grid-cols-4 gap-5">
          <button
            onClick={() => tampungValue.length !== 0 && setOperator("/")}
            className="bg-gray-700 border-2 min-w-fit p-3 border-yellow-600 hover:shadow-lg hover:shadow-gray-950 duration-200 hover:border-yellow-400 w-full h-14 flex justify-center items-center rounded-lg"
          >
            /
          </button>
          <button
            onClick={() => handleClearentry()}
            className="bg-gray-700 border-2 min-w-fit p-3 border-yellow-600 hover:shadow-lg hover:shadow-gray-950 duration-200 hover:border-yellow-400 w-full h-14 flex justify-center items-center rounded-lg"
          >
            CE
          </button>
          <button
            onClick={() => handleClear()}
            className="bg-gray-700 border-2 min-w-fit p-3 border-yellow-600 hover:shadow-lg hover:shadow-gray-950 duration-200 hover:border-yellow-400 w-full h-14 flex justify-center items-center rounded-lg"
          >
            C
          </button>
          <button
            onClick={() => handleBackSpace()}
            className="bg-gray-700 border-2 min-w-fit p-3 border-yellow-600 hover:shadow-lg hover:shadow-gray-950 duration-200 hover:border-yellow-400 w-full h-14 flex justify-center items-center rounded-lg"
          >
            <LuDelete />
          </button>
          <button
            onClick={() => handleSetValue("7")}
            className="bg-gray-700 border-2 min-w-fit p-3 border-yellow-600 hover:shadow-lg hover:shadow-gray-950 duration-200 hover:border-yellow-400 w-full h-14 flex justify-center items-center rounded-lg"
          >
            7
          </button>
          <button
            onClick={() => handleSetValue("8")}
            className="bg-gray-700 border-2 min-w-fit p-3 border-yellow-600 hover:shadow-lg hover:shadow-gray-950 duration-200 hover:border-yellow-400 w-full h-14 flex justify-center items-center rounded-lg"
          >
            8
          </button>
          <button
            onClick={() => handleSetValue("9")}
            className="bg-gray-700 border-2 min-w-fit p-3 border-yellow-600 hover:shadow-lg hover:shadow-gray-950 duration-200 hover:border-yellow-400 w-full h-14 flex justify-center items-center rounded-lg"
          >
            9
          </button>
          <button
            onClick={() => tampungValue.length !== 0 && setOperator("*")}
            className="bg-gray-700 border-2 min-w-fit p-3 border-yellow-600 hover:shadow-lg hover:shadow-gray-950 duration-200 hover:border-yellow-400 w-full h-14 flex justify-center items-center rounded-lg"
          >
            x
          </button>
          <button
            onClick={() => handleSetValue("4")}
            className="bg-gray-700 border-2 min-w-fit p-3 border-yellow-600 hover:shadow-lg hover:shadow-gray-950 duration-200 hover:border-yellow-400 w-full h-14 flex justify-center items-center rounded-lg"
          >
            4
          </button>
          <button
            onClick={() => handleSetValue("5")}
            className="bg-gray-700 border-2 min-w-fit p-3 border-yellow-600 hover:shadow-lg hover:shadow-gray-950 duration-200 hover:border-yellow-400 w-full h-14 flex justify-center items-center rounded-lg"
          >
            5
          </button>
          <button
            onClick={() => handleSetValue("6")}
            className="bg-gray-700 border-2 min-w-fit p-3 border-yellow-600 hover:shadow-lg hover:shadow-gray-950 duration-200 hover:border-yellow-400 w-full h-14 flex justify-center items-center rounded-lg"
          >
            6
          </button>
          <button
            onClick={() => tampungValue.length !== 0 && setOperator("-")}
            className="bg-gray-700 border-2 min-w-fit p-3 border-yellow-600 hover:shadow-lg hover:shadow-gray-950 duration-200 hover:border-yellow-400 w-full h-14 flex justify-center items-center rounded-lg"
          >
            -
          </button>
          <button
            onClick={() => handleSetValue("1")}
            className="bg-gray-700 border-2 min-w-fit p-3 border-yellow-600 hover:shadow-lg hover:shadow-gray-950 duration-200 hover:border-yellow-400 w-full h-14 flex justify-center items-center rounded-lg"
          >
            1
          </button>
          <button
            onClick={() => handleSetValue("2")}
            className="bg-gray-700 border-2 min-w-fit p-3 border-yellow-600 hover:shadow-lg hover:shadow-gray-950 duration-200 hover:border-yellow-400 w-full h-14 flex justify-center items-center rounded-lg"
          >
            2
          </button>
          <button
            onClick={() => handleSetValue("3")}
            className="bg-gray-700 border-2 min-w-fit p-3 border-yellow-600 hover:shadow-lg hover:shadow-gray-950 duration-200 hover:border-yellow-400 w-full h-14 flex justify-center items-center rounded-lg"
          >
            3
          </button>
          <button
            onClick={() => tampungValue.length !== 0 && setOperator("+")}
            className="bg-gray-700 border-2 min-w-fit p-3 border-yellow-600 hover:shadow-lg hover:shadow-gray-950 duration-200 hover:border-yellow-400 w-full h-14 flex justify-center items-center rounded-lg"
          >
            +
          </button>
          <button
            disabled
            className="bg-gray-700 border-2 min-w-fit p-3 border-yellow-600 hover:shadow-lg hover:shadow-gray-950 duration-200 hover:border-yellow-400 w-full h-14 flex justify-center items-center rounded-lg"
          >
            <GiSharpSmile />
          </button>
          <button
            onClick={() => handleSetValue("0")}
            className="bg-gray-700 border-2 min-w-fit p-3 border-yellow-600 hover:shadow-lg hover:shadow-gray-950 duration-200 hover:border-yellow-400 w-full h-14 flex justify-center items-center rounded-lg"
          >
            0
          </button>
          <div className="bg-gray-700 border-2 min-w-fit p-3 border-yellow-600 hover:shadow-lg hover:shadow-gray-950 duration-200 hover:border-yellow-400 w-full h-14 flex justify-center items-center rounded-lg">
            .
          </div>
          <button
            onClick={() => handleEquals()}
            className="bg-gray-700 border-2 min-w-fit p-3 border-yellow-600 hover:shadow-lg hover:shadow-gray-950 duration-200 hover:border-yellow-400 w-full h-14 flex justify-center items-center rounded-lg"
          >
            =
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
