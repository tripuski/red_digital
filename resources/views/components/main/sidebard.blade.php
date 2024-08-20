<div class="sidebar-logo">
  <!-- Logo Header -->
  <div class="logo-header" data-background-color="dark">
      <a href="{{ url('admin/dashboard') }}" class="logo">
          <img src="{{ asset('assets/img/logo.png') }}" alt="navbar brand" class="navbar-brand"
              height="20" />
      </a>
      <div class="nav-toggle">
          <button class="btn btn-toggle toggle-sidebar">
              <i class="gg-menu-right"></i>
          </button>
          <button class="btn btn-toggle sidenav-toggler">
              <i class="gg-menu-left"></i>
          </button>
      </div>
      <button class="topbar-toggler more">
          <i class="gg-more-vertical-alt"></i>
      </button>
  </div>
  <!-- End Logo Header -->
</div>
<div class="sidebar-wrapper scrollbar scrollbar-inner">
  <div class="sidebar-content">
      <ul class="nav nav-secondary">
          <li
              class="nav-item {{ request()->is('admin/dashboard') || request()->is('admin/dashboard/*') ? 'active' : '' }}">
              <a href="{{ url('admin/dashboard') }}">
                  <i class="fas fa-home"></i>
                  <p>Inicio</p>
              </a>
          </li>

          @can('admin.enterprises.index')
              <li
                  class="nav-item {{ request()->is('admin/enterprises') || request()->is('admin/enterprises/*') ? 'active' : '' }}">
                  <a href="{{ url('admin/enterprises') }}">
                      <i class="fas fa-building"></i>
                      <p>Empresas</p>
                  </a>
              </li>
          @endcan

          @can('admin.products.index')
              <li
                  class="nav-item {{ request()->is('admin/products') || request()->is('admin/products/*') ? 'active' : '' }}">
                  <a href="{{ url('admin/products') }}">
                      <i class="fas fa-industry"></i>
                      <p>Productos</p>
                  </a>
              </li>
          @endcan

          @can('admin.brands.index')
              <li
                  class="nav-item {{ request()->is('admin/brands') || request()->is('admin/brands/*') ? 'active' : '' }}">
                  <a href="{{ url('admin/brands') }}">
                      <i class="fas fa-parachute-box"></i>
                      <p>Marcas</p>
                  </a>
              </li>
          @endcan

          @can('admin.inventories.index')
              <li
                  class="nav-item {{ request()->is('admin/inventories') || request()->is('admin/inventories/*') ? 'active' : '' }}">
                  <a href="{{ url('admin/inventories') }}">
                      <i class="fas fa-warehouse"></i>
                      <p>Inventario</p>
                  </a>
              </li>
          @endcan

          @canany(['admin.users.index', 'admin.roles.index', 'admin.app-users.index'])
              <li
                  class="nav-item {{ request()->is('admin/roles') ||
                  request()->is('admin/roles/*') ||
                  request()->is('admin/users') ||
                  request()->is('admin/users/*' ||
                  request()->is('admin/app-users') ||
                  request()->is('admin/app-users/*'))
                      ? 'active submenu'
                      : '' }}">
                  <a data-bs-toggle="collapse" href="#dashboard" class="collapsed" aria-expanded="false">
                      <i class="fas fa-cogs"></i>
                      <p>Administración</p>
                      <span class="caret"></span>
                  </a>
                  <div class="collapse {{ request()->is('admin/roles') ||
                  request()->is('admin/roles/*') ||
                  request()->is('admin/users') ||
                  request()->is('admin/users/*') ||
                  request()->is('admin/app-users') ||
                  request()->is('admin/app-users/*')
                      ? 'show'
                      : '' }}"
                      id="dashboard">
                      <ul class="nav nav-collapse">

                          @can('admin.users.index')
                              <li
                                  class="{{ request()->is('admin/users') || request()->is('admin/users/*') ? 'active' : '' }}">
                                  <a href="{{ route('admin.users.index') }}">
                                      <span class="sub-item">Usuarios</span>
                                  </a>
                              </li>
                          @endcan

                          @can('admin.roles.index')
                              <li
                                  class="{{ request()->is('admin/roles') || request()->is('admin/roles/*') ? 'active' : '' }}">
                                  <a href="{{ route('admin.roles.index') }}">
                                      <span class="sub-item">Roles</span>
                                  </a>
                              </li>
                          @endcan

                          @can('admin.app-users.index')
                              <li
                                  class="{{ request()->is('admin/app-users') || request()->is('admin/app-users/*') ? 'active' : '' }}">
                                  <a href="{{ route('admin.app-users.index') }}">
                                      <span class="sub-item">Usuarios App</span>
                                  </a>
                              </li>
                          @endcan
                      </ul>
                  </div>
              </li>
          </ul>
      @endcanany
  </div>
</div>
