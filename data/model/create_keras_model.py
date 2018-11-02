from keras.models import Sequential
from keras.layers import Dense, Activation
import subprocess

verbose = True
keras_model_filepath = 'src/model/simple_keras_model.h5'
tensorflow_model_path = 'src/model/'

if verbose: print('Creating Keras model...')
model = Sequential([
    Dense(32, input_shape=(784,)),
    Activation('relu'),
    Dense(10),
    Activation('softmax'),
])

if verbose: print('Saving Keras model to h5 file...')
model.save(keras_model_filepath)

if verbose: print('Converting Keras model to TF model...')
conversion_bash_command = 'tensorflowjs_converter --input_format keras %s %s' % (keras_model_filepath, tensorflow_model_path)
subprocess.check_call(conversion_bash_command.split())

