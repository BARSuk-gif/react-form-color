import React, { useState } from "react";

const HEX_REGEX = /^#[0-9a-fA-F]{6}$/;

function hexToRgb(hex: string): string {
	const r = parseInt(hex.slice(1, 3), 16);
	const g = parseInt(hex.slice(3, 6), 16);
	const b = parseInt(hex.slice(5, 7), 16);
	return `rgb(${r}, ${g}, ${b})`;
}

interface Props {
	onColorChange: (rgb: string | null) => void;
}

export default function ColorConverter ({ onColorChange }: Props) {
  const [color, setColor] = useState('');
	const [error, setError] = useState('');
	const [rgb, setRgb] = useState('');

	const handleColorInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setColor(value);

		if (value.length < 7) {
			setError("");
			setRgb("");
			onColorChange(null);
			return;
		}

		if (!HEX_REGEX.test(value)) {
			setError("Некорректный ввод цвета");
			setRgb("");
			onColorChange(null);
			return;
		}

		setError("");
		const rgbValue = hexToRgb(value);
		setRgb(rgbValue);
		onColorChange(value);
	}

	return (
		<label className="container">
			<input
				type="text"
				value={color}
				onChange={handleColorInput}
				className="input-field"
				id="colorInput"
				placeholder="Введите код цвета..."
				maxLength={7}
			/>
			<span className={`result ${error ? "error" : ""}`} id="result">
				{error || rgb}
			</span>
		</label>
	)
}