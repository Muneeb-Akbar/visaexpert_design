(() => {
  // frappe-html:/Users/macbookpro/Desktop/VisaExpert/VE_erp/visaexpert/frappe-bench/apps/visaexpert_design/visaexpert_design/public/js/templates/navbar.html
  frappe.templates["navbar"] = `<header class="navbar navbar-expand sticky-top" role="navigation">
	<div class="container">
		<a class="navbar-brand navbar-home" href="/app">
			<img class="app-logo" style="width:60px; height:60px;" src="{{ frappe.boot.app_logo_url }}">
		</a>
		<ul class="nav navbar-nav d-none d-sm-flex" id="navbar-breadcrumbs"></ul>
		<div class="collapse navbar-collapse justify-content-end">
			<form class="form-inline fill-width justify-content-end" role="search" onsubmit="return false;">
				{% if (frappe.boot.read_only) { %}
					<span class="indicator-pill yellow no-indicator-dot" title="{%= __("Your site is getting upgraded.") %}">
						{%= __("Read Only Mode") %}
					</span>
				{% } %}
				<div class="input-group search-bar text-muted hidden">
					<input
						id="navbar-search"
						type="text"
						class="form-control"
						placeholder="{%= __("Search") %}"
						aria-haspopup="true"
						style="border: 2px solid rgba(145, 145, 145, 0.43);"
					>
					<span class="search-icon">
						<svg class="icon"><use href="#icon-search"></use></svg>
					</span>
				</div>
			</form>
			<ul class="navbar-nav">
				<li class="nav-item dropdown dropdown-navbar-user dropdown-mobile">
					<a class="nav-link" data-toggle="dropdown" href="#" onclick="return false;">
						{{ avatar }}
                
					</a>
					<div class="dropdown-menu dropdown-menu-right" id="toolbar-user" role="menu">
						{% for item in navbar_settings.settings_dropdown %}
							{% if (!item.hidden) { %}
								{% if (item.route) { %}
									<a class="dropdown-item" href="{{ item.route }}">
										{%= __(item.item_label) %}
									</a>
								{% } else if (item.action) { %}
									<a class="dropdown-item" onclick="return {{ item.action }}">
										{%= __(item.item_label) %}
									</a>
								{% } else { %}
									<div class="dropdown-divider"></div>
								{% } %}
							{% } %}
						{% endfor %}
					</div>
				</li>
				<li class="nav-item dropdown dropdown-help dropdown-mobile d-none d-lg-none">
					<a class="nav-link" data-toggle="dropdown" href="#" onclick="return false;">
						{{ __("Help") }}
						<span>
							<svg class="icon icon-xs"><use href="#icon-small-down"></use></svg>
						</span>
					</a>
					<div class="dropdown-menu dropdown-menu-right" id="toolbar-help" role="menu">
						<div id="help-links"></div>
						<div class="dropdown-divider documentation-links"></div>
						{% for item in navbar_settings.help_dropdown %}
							{% if (!item.hidden) { %}
								{% if (item.route) { %}
									<a class="dropdown-item" href="{{ item.route }}">
										{%= __(item.item_label) %}
									</a>
								{% } else if (item.action) { %}
									<a class="dropdown-item" onclick="return {{ item.action }}">
										{%= __(item.item_label) %}
									</a>
								{% } else { %}
									<div class="dropdown-divider"></div>
								{% } %}
							{% } %}
						{% endfor %}
					</div>
				</li>
				<li class="nav-item dropdown dropdown-notifications dropdown-mobile hidden">
					<a
						class="nav-link notifications-icon text-muted"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="true"
						href="#"
						onclick="return false;">
						<span class="notifications-seen">
							<svg class="icon icon-md"><use href="#icon-notification-new"></use></svg>
						</span>
						<span class="notifications-unseen">
							<svg class="icon icon-md"><use href="#icon-notification-new"></use></svg>
						</span>
					</a>
					<div class="dropdown-menu notifications-list dropdown-menu-right" role="menu">
						<div class="notification-list-header">
							<div class="header-items"></div>
							<div class="header-actions"></div>
						</div>
						<div class="notification-list-body">
							<div class="panel-notifications"></div>
							<div class="panel-events"></div>
						</div>
					</div>
				</li>
				<li class="nav-item dropdown dropdown-message dropdown-mobile hidden">
					<a
						class="nav-link notifications-icon text-muted"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="true"
						href="#"
						onclick="return false;">
						<span>
							<svg class="icon icon-md"><use href="#icon-small-message"></use></svg>
						</span>
					</a>
				</li>
			</ul>
		</div>
	</div>
</header>

<svg style="display: none">
    <symbol id="icon-notification-new" viewBox="0 0 24 24">
        <path d="m20.859 15.331-3.772 6.155a5.235 5.235 0 0 1 -3.87 2.477 5.315 5.315 0 0 1 -.628.037 5.212 5.212 0 0 1 -3-.955 4.741 4.741 0 0 1 -6.689-6.566l-1.315-1.313a5.264 5.264 0 0 1 .955-8.2l5.767-3.566a8.859 8.859 0 0 1 10.327.551l1.659-1.659a1 1 0 1 1 1.414 1.414l-1.657 1.658a8.951 8.951 0 0 1 .809 9.967zm-12.794 6.316-3.719-3.72a2.721 2.721 0 0 0 .463 3.264 2.827 2.827 0 0 0 3.256.456zm9.921-15.6a6.887 6.887 0 0 0 -8.617-.947l-5.777 3.566a3.265 3.265 0 0 0 -.592 5.086l7.29 7.291a3.265 3.265 0 0 0 5.093-.6l3.755-6.125a6.937 6.937 0 0 0 -1.152-8.276zm1.279 17.953a1 1 0 0 1 -.591-1.808 8.633 8.633 0 0 0 3.315-5.407 1 1 0 1 1 1.953.43 10.7 10.7 0 0 1 -4.088 6.593 1 1 0 0 1 -.589.192zm-18.265-18.261a1 1 0 0 1 -.8-1.594 10.692 10.692 0 0 1 6.713-4.125 1 1 0 1 1 .4 1.96 8.636 8.636 0 0 0 -5.513 3.354 1 1 0 0 1 -.8.405z"/>
    </symbol>
</svg>`;
})();
//# sourceMappingURL=visaexpert_design.bundle.NWDSMDRQ.js.map
