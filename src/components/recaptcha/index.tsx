import React, {
  ForwardRefRenderFunction,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {useTheme} from 'styled-components';

import {StyleSheet, SafeAreaView, Modal} from 'react-native';
import WebView from 'react-native-webview';
import {
  RECAPTCHA_CLIENT_SITE_KEY,
  RECAPTCHA_CLIENT_SITE_URL,
} from '../../config';

declare const window: any;

const patchPostMessageJsCode = `(${String(function () {
  var originalPostMessage = window.ReactNativeWebView.postMessage;
  var patchedPostMessage = function (
    message: any,
    targetOrigin: any,
    transfer: any
  ) {
    originalPostMessage(message, targetOrigin, transfer);
  };
  patchedPostMessage.toString = function () {
    return String(Object.hasOwnProperty).replace(
      'hasOwnProperty',
      'postMessage'
    );
  };
  window.ReactNativeWebView.postMessage = patchedPostMessage;
})})();`;

/**
 *
 * @param {*} onMessage: callback after received response, error of Google captcha or when user cancel
 * @param {*} siteKey: your site key of Google captcha
 * @param {*} style: custom style
 * @param {*} baseUrl: base url
 * @param {*} languageCode: can be found at https://developers.google.com/recaptcha/docs/language
 * @param {*} cancelButtonText: title of cancel button
 */
const GoogleReCaptcha: ForwardRefRenderFunction<any, any> = (
  {onMessage, style, languageCode, cancelButtonText = 'Cancel'}: any,
  ref
) => {
  const {colors} = useTheme();
  const [show, setShow] = useState(false);
  const recaptcha = useRef<any>();

  const generateTheWebViewContent = () => {
    const originalForm = `<!DOCTYPE html>
			<html>
			<head> 
				<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
				<meta http-equiv="X-UA-Compatible" content="ie=edge"> 
				<script src="https://recaptcha.google.com/recaptcha/api.js?explicit&hl=${
          languageCode || 'en'
        }"></script> 
				<script type="text/javascript"> 
				var onloadCallback = function() { };  
				var onDataCallback = function(response) { 
					window.ReactNativeWebView.postMessage(response);  
					setTimeout(function () {
						document.getElementById('captcha').style.display = 'none';
					}, 1500);
				};  
				var onCancel = function() {  
					window.ReactNativeWebView.postMessage("cancel"); 
					document.getElementById('captcha').style.display = 'none';
				}
				var onDataExpiredCallback = function(error) {  window.ReactNativeWebView.postMessage("expired"); };  
				var onDataErrorCallback = function(error) {  window.ReactNativeWebView.postMessage("error"); } 
				</script> 
				<style>
					.btn {
						background-color: ${colors.danger}; 
						color: #ffffff; padding: 8px 32px; margin-top: 8px; 
						border: none; border-radius: 25px; font-weight: bold;
					}
					.btn:active {
						outline: none;
					}
					.btn:focus {
						outline: none;
					}
				</style>
			</head>
			<body> 
				<div id="captcha">
					<div style="text-align: center; padding-top: 100px;">
					<div class="g-recaptcha" style="display: inline-block; height: auto;" 
						data-sitekey="${RECAPTCHA_CLIENT_SITE_KEY}" data-callback="onDataCallback"  
						data-expired-callback="onDataExpiredCallback"  
						data-error-callback="onDataErrorCallback">
					</div>
					<div>
						<button 
							onclick="onCancel()"
							class="btn" type="button">
							${cancelButtonText}
						</button> 
					</div>
					</div>
				</div>
			</body>
			</html>`;
    return originalForm;
  };

  useImperativeHandle(ref, () => ({
    open: () => {
      setShow(true);
    },
    hide: () => {
      setShow(false);
    },
  }));

  return (
    <Modal animationType="fade" transparent={true} visible={show}>
      <SafeAreaView
        style={[styles.wrapper, {backgroundColor: colors.background}]}
      >
        <WebView
          ref={recaptcha}
          originWhitelist={['*']}
          mixedContentMode={'always'}
          onMessage={onMessage}
          javaScriptEnabled
          injectedJavaScript={patchPostMessageJsCode}
          automaticallyAdjustContentInsets
          style={[{backgroundColor: 'transparent', width: '100%'}, style]}
          source={{
            html: generateTheWebViewContent(),
            baseUrl: RECAPTCHA_CLIENT_SITE_URL,
          }}
        />
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    overflow: 'hidden',
  },
});
export default React.forwardRef(GoogleReCaptcha);
