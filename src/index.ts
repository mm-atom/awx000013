
export default function show_modal(title: string, content: string, confirmText?: string, confirmColor?: string, showCancel?: boolean, cancelText?: string, cancelColor?: string) {
	const options = {};

	if (cancelText !== undefined) {
		Object.assign(options, {
			cancelText
		});
	}
	if (showCancel !== undefined) {
		Object.assign(options, {
			showCancel
		});
	}
	if (cancelColor) {
		Object.assign(options, {
			cancelColor
		});
	}
	if (confirmText !== undefined) {
		Object.assign(options, {
			confirmText
		});
	}
	if (confirmColor) {
		Object.assign(options, {
			confirmColor
		});
	}

	return new Promise<boolean>((resolve, reject) => {
		wx.showModal({
			// cancelColor,							// 取消按钮的文字颜色，默认为"#000000"
			// cancelText,								// 取消按钮的文字，默认为"取消"，最多 4 个字符
			// confirmColor,							// 确定按钮的文字颜色，默认为"#3CC51F"
			// confirmText,							// 确定按钮的文字，默认为"确定"，最多 4 个字符
			content,
			// showCancel,								// 是否显示取消按钮,默认为true
			title,
			success(res) {
				if (res.confirm) {
					resolve(true);
				} else if (res.cancel) {
					resolve(false);
				}
			},
			fail(res) {
				reject(res);
			},
			...options
		});
	});
}
