import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the @huxianc/jupyterlab_bq_theme extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: '@huxianc/jupyterlab_bq_theme',
  requires: [IThemeManager],
  autoStart: true,
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension @huxianc/jupyterlab_bq_theme is activated!');
    const style = '@huxianc/jupyterlab_bq_theme/index.css';

    manager.register({
      name: '@huxianc/jupyterlab_bq_theme',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default extension;
