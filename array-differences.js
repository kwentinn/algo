        var getDifferences = function (oldSources, newSources) {
            console.log('getDifferences');

            var itemFound = false,
                oldObj = null,
                newObj = null,
                i = 0,
                j = 0;
            var differences = {
                added: [],
                deleted: []
            };

            // 1. Manages deleted items
            for (i = 0; i < oldSources.length; i++) {
                itemFound = false;
                oldObj = oldSources[i];
                for (j = 0; j < newSources.length; j++) {
                    newObj = newSources[j];
                    if (oldObj['id'] == newObj['id']) {
                        itemFound = true;
                        break;
                    }
                }
                if (!itemFound) {
                    differences['deleted'].push(oldObj);
                }
            }

            // 2. Manages added items
            for (i = 0; i < newSources.length; i++) {
                itemFound = false;
                newObj = newSources[i];
                for (j = 0; j < oldSources.length; j++) {
                    oldObj = oldSources[j];
                    if (newObj['id'] == oldObj['id']) {
                        itemFound = true;
                        break;
                    }
                }
                if (!itemFound) {
                    differences['added'].push(newObj);
                }
            }

            return differences;
        };
