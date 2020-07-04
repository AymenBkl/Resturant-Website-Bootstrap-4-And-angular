import { UsersRouterModule } from './users-router.module';

describe('UsersRouterModule', () => {
  let usersRouterModule: UsersRouterModule;

  beforeEach(() => {
    usersRouterModule = new UsersRouterModule();
  });

  it('should create an instance', () => {
    expect(usersRouterModule).toBeTruthy();
  });
});
