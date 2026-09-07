// The interactive shape ids in ProjectsArt, one per project.
export const PROJECT_SHAPE_IDS = ['arch', 'target', 'moon', 'squares', 'stripes', 'quarter', 'ring'] as const;
export type ProjectShapeId = (typeof PROJECT_SHAPE_IDS)[number];
