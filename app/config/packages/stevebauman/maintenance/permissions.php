<?php

return array(

    /**
     * The default maintenance application permissions during installation.
     */
    'default' => array(
        /*
         * Allows access to all site functions
         */
        'superuser' => 'superuser',
    ),

    'all_users' => array(

        'maintenance.login',
        'maintenance.login',
        'maintenance.logout',
        'maintenance.register',
        'maintenance.register.why',
        'maintenance.register',
        'maintenance.permission-denied.index',

    ),

    'customers' => array(

        'maintenance.work-requests.index',
        'maintenance.work-requests.create',
        'maintenance.work-requests.store',
        'maintenance.work-requests.show',
        'maintenance.work-requests.edit',
        'maintenance.work-requests.update',
        'maintenance.work-requests.destroy',

    ),

    'workers' => array(

        'maintenance.dashboard.index',

        'maintenance.events.index',
        'maintenance.events.create',
        'maintenance.events.store',
        'maintenance.events.show',
        'maintenance.events.edit',
        'maintenance.events.update',
        'maintenance.events.destroy',
        'maintenance.events.report.store',
        'maintenance.events.report.edit',
        'maintenance.events.report.update',
        'maintenance.events.report.destroy',

        'maintenance.work-orders.assigned.index',

        'maintenance.work-orders.priorities.index',
        'maintenance.work-orders.priorities.create',
        'maintenance.work-orders.priorities.store',
        'maintenance.work-orders.priorities.edit',
        'maintenance.work-orders.priorities.update',
        'maintenance.work-orders.priorities.destroy',

        'maintenance.work-orders.statuses.index',
        'maintenance.work-orders.statuses.create',
        'maintenance.work-orders.statuses.store',
        'maintenance.work-orders.statuses.edit',
        'maintenance.work-orders.statuses.update',
        'maintenance.work-orders.statuses.destroy',

        'maintenance.work-orders.categories.json',
        'maintenance.work-orders.categories.nodes.create',
        'maintenance.work-orders.categories.nodes.move',
        'maintenance.work-orders.categories.nodes.store',
        'maintenance.work-orders.categories.index',
        'maintenance.work-orders.categories.create',
        'maintenance.work-orders.categories.store',
        'maintenance.work-orders.categories.show',
        'maintenance.work-orders.categories.edit',
        'maintenance.work-orders.categories.update',
        'maintenance.work-orders.categories.destroy',

        'maintenance.work-orders.session.start',
        'maintenance.work-orders.session.end',

        'maintenance.work-orders.report.create',
        'maintenance.work-orders.report.store',
        'maintenance.work-orders.report.show',
        'maintenance.work-orders.report.edit',
        'maintenance.work-orders.report.update',
        'maintenance.work-orders.report.destroy',

        'maintenance.work-orders.index',
        'maintenance.work-orders.create',
        'maintenance.work-orders.store',
        'maintenance.work-orders.show',
        'maintenance.work-orders.edit',
        'maintenance.work-orders.update',
        'maintenance.work-orders.destroy',

        'maintenance.work-orders.updates.customer.store',
        'maintenance.work-orders.updates.customer.destroy',
        'maintenance.work-orders.updates.technician.store',
        'maintenance.work-orders.updates.technician.destroy',

        'maintenance.work-orders.parts.index',
        'maintenance.work-orders.parts.stocks.index',
        'maintenance.work-orders.parts.stocks.create',
        'maintenance.work-orders.parts.stocks.store',
        'maintenance.work-orders.parts.stocks.put-back',
        'maintenance.work-orders.parts.stocks.put-back-some',

        'maintenance.work-orders.attachments.uploads.store',
        'maintenance.work-orders.attachments.uploads.destroy',
        'maintenance.work-orders.attachments.index',
        'maintenance.work-orders.attachments.create',
        'maintenance.work-orders.attachments.store',
        'maintenance.work-orders.attachments.show',
        'maintenance.work-orders.attachments.destroy',

        'maintenance.work-orders.notifications.store',
        'maintenance.work-orders.notifications.update',

        'maintenance.work-orders.events.index',
        'maintenance.work-orders.events.create',
        'maintenance.work-orders.events.store',
        'maintenance.work-orders.events.show',
        'maintenance.work-orders.events.edit',
        'maintenance.work-orders.events.update',
        'maintenance.work-orders.events.destroy',

        'maintenance.assets.categories.json',
        'maintenance.assets.categories.nodes.create',
        'maintenance.assets.categories.nodes.move',
        'maintenance.assets.categories.nodes.store',
        'maintenance.assets.categories.index',
        'maintenance.assets.categories.create',
        'maintenance.assets.categories.store',
        'maintenance.assets.categories.show',
        'maintenance.assets.categories.edit',
        'maintenance.assets.categories.update',
        'maintenance.assets.categories.destroy',

        'maintenance.assets.images.uploads.store',
        'maintenance.assets.images.uploads.destroy',
        'maintenance.assets.images.index',
        'maintenance.assets.images.create',
        'maintenance.assets.images.store',
        'maintenance.assets.images.show',
        'maintenance.assets.images.destroy',

        'maintenance.assets.meters.index',
        'maintenance.assets.meters.store',
        'maintenance.assets.meters.show',
        'maintenance.assets.meters.edit',
        'maintenance.assets.meters.update',
        'maintenance.assets.meters.destroy',
        'maintenance.assets.meters.readings.store',
        'maintenance.assets.meters.readings.destroy',

        'maintenance.assets.manuals.uploads.store',
        'maintenance.assets.manuals.uploads.destroy',
        'maintenance.assets.manuals.index',
        'maintenance.assets.manuals.create',
        'maintenance.assets.manuals.store',
        'maintenance.assets.manuals.destroy',

        'maintenance.assets.events.index',
        'maintenance.assets.events.create',
        'maintenance.assets.events.store',
        'maintenance.assets.events.show',
        'maintenance.assets.events.edit',
        'maintenance.assets.events.update',
        'maintenance.assets.events.destroy',

        'maintenance.assets.index',
        'maintenance.assets.create',
        'maintenance.assets.store',
        'maintenance.assets.show',
        'maintenance.assets.edit',
        'maintenance.assets.update',
        'maintenance.assets.destroy',

        'maintenance.inventory.categories.json',
        'maintenance.inventory.categories.nodes.create',
        'maintenance.inventory.categories.nodes.move',
        'maintenance.inventory.categories.nodes.store',
        'maintenance.inventory.categories.index',
        'maintenance.inventory.categories.create',
        'maintenance.inventory.categories.store',
        'maintenance.inventory.categories.show',
        'maintenance.inventory.categories.edit',
        'maintenance.inventory.categories.update',
        'maintenance.inventory.categories.destroy',

        'maintenance.inventory.index',
        'maintenance.inventory.create',
        'maintenance.inventory.store',
        'maintenance.inventory.show',
        'maintenance.inventory.edit',
        'maintenance.inventory.update',
        'maintenance.inventory.destroy',

        'maintenance.inventory.stocks.index',
        'maintenance.inventory.stocks.create',
        'maintenance.inventory.stocks.store',
        'maintenance.inventory.stocks.show',
        'maintenance.inventory.stocks.edit',
        'maintenance.inventory.stocks.update',
        'maintenance.inventory.stocks.destroy',

        'maintenance.inventory.stocks.movements.index',

        'maintenance.inventory.events.index',
        'maintenance.inventory.events.create',
        'maintenance.inventory.events.store',
        'maintenance.inventory.events.show',
        'maintenance.inventory.events.edit',
        'maintenance.inventory.events.update',
        'maintenance.inventory.events.destroy',

        'maintenance.attachments.destroy',
        'maintenance.attachments.uploaded.destroy',

        'maintenance.locations.json',
        'maintenance.locations.nodes.create',
        'maintenance.locations.nodes.move',
        'maintenance.locations.nodes.store',
        'maintenance.locations.index',
        'maintenance.locations.create',
        'maintenance.locations.store',
        'maintenance.locations.show',
        'maintenance.locations.edit',
        'maintenance.locations.update',
        'maintenance.locations.destroy',

        'maintenance.metrics.index',
        'maintenance.metrics.create',
        'maintenance.metrics.store',
        'maintenance.metrics.edit',
        'maintenance.metrics.update',
        'maintenance.metrics.destroy',

        'maintenance.api.calendar.events.index',
        'maintenance.api.calendar.events.create',
        'maintenance.api.calendar.events.store',
        'maintenance.api.calendar.events.show',
        'maintenance.api.calendar.events.edit',
        'maintenance.api.calendar.events.update',
        'maintenance.api.calendar.events.destroy',
        'maintenance.api.v1.work-orders.events.index',
        'maintenance.api.v1.work-orders.events.show',
        'maintenance.api.inventory.stocks.edit',
        'maintenance.api.inventory.stocks.update',
        'maintenance.api.v1.inventory.events.index',
        'maintenance.api.v1.inventory.events.show',
        'maintenance.api.v1.assets.get',
        'maintenance.api.v1.assets.find',
        'maintenance.api.v1.assets.events.index',
        'maintenance.api.v1.assets.events.show',


    ),

    'managers' => array(

        'maintenance.work-orders.assignments.index',
        'maintenance.work-orders.assignments.create',
        'maintenance.work-orders.assignments.store',
        'maintenance.work-orders.assignments.destroy',

    ),

    'administrators' => array(

        'maintenance.admin.dashboard.index',
        'maintenance.admin.users.index',
        'maintenance.admin.users.create',
        'maintenance.admin.users.store',
        'maintenance.admin.users.show',
        'maintenance.admin.users.edit',
        'maintenance.admin.users.update',
        'maintenance.admin.users.destroy',
        'maintenance.admin.users.check-access',
        'maintenance.admin.groups.index',
        'maintenance.admin.groups.create',
        'maintenance.admin.groups.store',
        'maintenance.admin.groups.show',
        'maintenance.admin.groups.edit',
        'maintenance.admin.groups.update',
        'maintenance.admin.groups.destroy',
        'maintenance.admin.archive.index',
        'maintenance.admin.archive.assets.restore',
        'maintenance.admin.archive.assets.index',
        'maintenance.admin.archive.assets.show',
        'maintenance.admin.archive.assets.destroy',
        'maintenance.admin.archive.work-orders.restore',
        'maintenance.admin.archive.work-orders.index',
        'maintenance.admin.archive.work-orders.show',
        'maintenance.admin.archive.work-orders.destroy',
        'maintenance.admin.archive.inventory.restore',
        'maintenance.admin.archive.inventory.index',
        'maintenance.admin.archive.inventory.show',
        'maintenance.admin.archive.inventory.destroy',

    ),

);