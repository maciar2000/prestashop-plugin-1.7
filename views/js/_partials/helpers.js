/**
 * BlueMedia_BluePayment extension
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the GNU Lesser General Public License
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://www.gnu.org/licenses/lgpl-3.0.en.html
 *
 * @category       BlueMedia
 * @package        BlueMedia_BluePayment
 * @copyright      Copyright (c) 2015-2022
 * @license        https://www.gnu.org/licenses/lgpl-3.0.en.html GNU Lesser General Public License
 */

export function hideApplePayOtherBrowser() {
	const hideApplePayOtherBrowser = (navigator.userAgent.indexOf('Safari') != -1
		&& navigator.userAgent.indexOf('Chrome') == -1);
	const elm = document.querySelector('[data-bm-wallet-name="Apple Pay"]');

	if(!hideApplePayOtherBrowser && elm !== null) {
		elm.style.display="none";
	}
}


export function getIdElement(elm) {
	const name = elm.id;
	return name.replace(/\D/g, '');
}

export function getPaymentContainer(index) {
	return document.querySelector('#payment-option-' + index + '-container');
}

export function getPaymentContent(index) {
	return document.querySelector('#payment-option-' + index + '-additional-information');
}

export function getPaymentForm(index) {
	return document.querySelector('#pay-with-payment-option-' + index + '-form');
}
