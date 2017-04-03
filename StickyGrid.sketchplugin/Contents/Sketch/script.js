function computePosition(pos, gridInterval) {
  return Math.round(pos / gridInterval) * gridInterval;
}

// Adjust point's coords of shape layers to grid
function adjustPointsOf(shapeLayer, gridInterval) {
  var path = shapeLayer.path();
  var pointsCount = path.numberOfPoints();
  var artboardFrame = shapeLayer.frameInArtboard();

  for (var j = 0; j < pointsCount; j++) {
    var point = path.pointAtIndex(j);

    var absolutePoint = shapeLayer.absolutePoint(point.point());

    var absX = artboardFrame.origin.x + absolutePoint.x;
    var relX = computePosition(absX, gridInterval) - absX;

    var absY = artboardFrame.origin.y + absolutePoint.y;
    var relY = computePosition(absY, gridInterval) - absY;

    var cgPoint = shapeLayer.relativePoint(
      CGPointMake(
        absolutePoint.x + relX,
        absolutePoint.y + relY
      ));

    point.movePointTo(cgPoint);
  }

  shapeLayer.adjustFrameAfterEditIntegral(false);
}

function adjustSelection(selection, gridInterval) {
  for (var i = 0; i < selection.count(); i++) {
    var object = selection.objectAtIndex(i);

    if (object.isKindOfClass(MSShapePathLayer.class())) {
      // MSShapeGroup
      adjustPointsOf(object, gridInterval);
    } else if (object.isMemberOfClass(MSLayerGroup.class())) {
      // MSLayerGroup
      for (var l = 0; l < object.layers().count(); l++) {
        var shapeLayerGroup = object.layers().objectAtIndex(l);

        for (var l2 = 0; l2 < shapeLayerGroup.layers().count(); l2++)
          adjustPointsOf(shapeLayerGroup.layers().objectAtIndex(l2), gridInterval);
      }
    } else {
      // MSShapePathLayer
      for (var l = 0; l < object.layers().count(); l++)
        adjustPointsOf(object.layers().objectAtIndex(l), gridInterval);
    }
  }
}

function snapToGrid(context) {
  var gridInterval = MSDefaultGrid.defaultGrid().gridSize();
  adjustSelection(context.selection, gridInterval);
}

function snapToPixelGrid(context) {
  adjustSelection(context.selection, 1.0);
}
