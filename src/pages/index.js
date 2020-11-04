import './index.less';
import LeftMenu from "../Components/LeftMenu";
import RightContent from "../Components/RenderMD";

const schemeHandler = () => {
	const styleContainer = document.getElementById('styleContainer');
	const rootContainer = document.getElementById('root');
	const link = document.createElement('link');
	link.rel = 'stylesheet';
	link.type = 'text/css';
	try {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			// dark
			rootContainer.className = 'dark';
			link.href = 'https://bossfs.sammbo.com/sammbo-web/scheme/qd-dark.css';
		} else {
			// light
			rootContainer.className = 'light';
			link.href = 'https://bossfs.sammbo.com/sammbo-web/scheme/qd-light.css';
		}
		styleContainer.innerHTML = '';
		styleContainer.appendChild(link);
	} catch (e) {
		console.error('设置主题失败!', e);
	}
}

try {
	window.matchMedia('(prefers-color-scheme: dark)').addListener(schemeHandler);
	window.matchMedia('(prefers-color-scheme: light)').addListener(schemeHandler);
	window.addEventListener('load', () => {
		schemeHandler();
		const renderLeftMenu = new LeftMenu({
			el: 'leftMenu'
		});
		const renderRightDoc = new RightContent({
			el: 'rightContainer'
		});
		renderLeftMenu.init();
		renderLeftMenu.onRenderPage = (MDFile) => {
			renderRightDoc.renderContent(MDFile);
		}
		window.renderLeftMenu = renderLeftMenu;
	});
} catch (e) {
	console.error(e);
}
