PLUGIN_NAME = $(notdir $(CURDIR))
PLUGIN_DIR = $(HOME)/Library/Application Support/com.bohemiancoding.sketch3/Plugins/$(PLUGIN_NAME)

link:
	ln -s "$(CURDIR)" "$(PLUGIN_DIR)"

unlink:
	rm "$(PLUGIN_DIR)"
