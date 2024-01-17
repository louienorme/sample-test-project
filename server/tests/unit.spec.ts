import { postTask, getTasks } from '../src/tasks/service';
import { TaskModel } from '../src/tasks/model';
import sinon from 'sinon';

describe('Task Service Unit Tests', () => {
  let taskModelMock: sinon.SinonMock;

  beforeEach(() => {
    // Create a mock for TaskModel
    taskModelMock = sinon.mock(TaskModel);
  });

  afterEach(() => {
    // Restore the original behavior of TaskModel
    taskModelMock.restore();
  });

  it('should get tasks', async () => {
    // Arrange
    const expectedTasks = [
      { title: 'Task 1', desc: 'Desc 1' },
      { title: 'Task 2', desc: 'Desc 2' },
    ];
    taskModelMock.expects('find').resolves(expectedTasks);

    // Act
    const result = await getTasks();

    // Assert
    expect(result).toEqual(expectedTasks);
  });

  it('should post a task', async () => {
    // Arrange
    const postData = { title: 'New Task', desc: 'Task Desc' };
    let taskInstanceMock = sinon.stub(TaskModel.prototype, 'save');

    taskInstanceMock.resolves(postData);

    // Act
    const result = await postTask(postData);

    // Assert
    expect(result).toMatchObject(postData);
  });
});
