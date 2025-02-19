import type { Node, RectOptions } from '$root/rendering-util/types.d.ts';
import { drawRect } from './drawRect.js';

export const state = async (parent: SVGAElement, node: Node) => {
  const options = {
    rx: 5,
    ry: 5,
    classes: 'flowchart-node',
  } as RectOptions;
  return drawRect(parent, node, options);
};
