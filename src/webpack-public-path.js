// Dynamically set the webpack public path at runtime below
// This magic global is used by webpack to set the public path at runtime.
// The public path is set dynamically to avoid the following issues:
// 1. https://github.com/Devalopers/DevalopersWeb/issues/205
// 2. https://github.com/Devalopers/DevalopersWeb/issues/181
// 3. https://github.com/Devalopers/DevalopersWeb/pull/125
// Documentation: https://webpack.js.org/configuration/output/#output-publicpath
// eslint-disable-next-line no-undef
__webpack_public_path__ = window.location.protocol + "//" + window.location.host + "/";
