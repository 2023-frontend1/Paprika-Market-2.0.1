import color from '../styles/themes/color'

const autoColor = () => {
	const colorKeys = Object.keys(color)
	const randomColorKey = colorKeys[Math.floor(Math.random() * colorKeys.length)]

	const brightnessKeys = Object.keys(color[randomColorKey])
	const randomBrightnessKey =
		brightnessKeys[Math.floor(Math.random() * brightnessKeys.length)]

	return color[randomColorKey][randomBrightnessKey]
}

export default autoColor
