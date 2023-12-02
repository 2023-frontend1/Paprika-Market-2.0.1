import { useRef, useState } from 'react'

const useAlarm = (cycle = 5) => {
	// 타이머
	const timerRef = useRef(null)
	// 카운트
	const countRef = useRef(0)
	// 알람이 울린 횟수
	const [ring, setRing] = useState(0)

	const timerStart = () => {
		if (timerRef.current !== null) return
		// 카운트 설정
		timerRef.current = setInterval(() => {
			countRef.current += 1

			// 카운트 값이 설정된 cycle 과 같아지면
			if (countRef.current === cycle) {
				// 알람 울린 횟수 증가
				setRing((prev) => prev + 1)
				// 타이머 끄기
				timerReset()
			}
		}, 1000)
	}

	const timerReset = () => {
		if (timerRef.current === null) return
		clearInterval(timerRef.current)
		timerRef.current = null
		countRef.current = 0
	}

	return { ring, timerStart, timerReset }
}

export default useAlarm
