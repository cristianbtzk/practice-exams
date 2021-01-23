import Answer from '../models/Answer';
// import AppError from '../../errors/AppError';

class ListTestsAnswersService {
  async execute(test_id) {
    const answers = await Answer.findAll({
      where: {
        test_id,
      },
    });

    return answers;
  }
}

export default new ListTestsAnswersService();