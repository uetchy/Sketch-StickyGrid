# StickyGrid

[![Join the chat at https://gitter.im/uetchy/Sketch-StickyGrid](https://badges.gitter.im/uetchy/Sketch-StickyGrid.svg)](https://gitter.im/uetchy/Sketch-StickyGrid?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Sketch plugin to make paths be snapped to Grid and/or Pixel Grid.

![](http://uechi-public.s3.amazonaws.com/github/sketch-stickygrid.png)

## Installation

1. [Download the plugin](https://github.com/uetchy/Sketch-StickyGrid/archive/master.zip)
2. Unzip the archive and double-click `StickyGrid.sketchplugin`

If you prefer CLI-way:

```
$ cd "$HOME/Library/Application Support/com.bohemiancoding.sketch3/Plugins"
$ git clone https://github.com/uetchy/Sketch-StickyGrid.git
```

## Usage

### Snap to Grid `ctrl` + `⌘` + `G`

### Snap to Pixel Grid `ctrl` + `⌘` + `X`

## More information

See official document [Sketch - Pixel Precision](https://www.sketchapp.com/learn/documentation/13-other/5-pixel-precision.html).

## Contributing

### Debugging

#### Dump classes

```
class-dump /Applications/Sketch.app > sketch.dump
```

#### Log

```js
log(something.treeAsDictionary());
```

to see:

```
tail -f /var/log/system.log
```
