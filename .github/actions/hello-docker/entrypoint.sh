#!/bin/sh

echo "::debug::Debug message."
echo "::warning::Warning message."
echo "::error::Error message."

echo "::add-mask::${1}"

echo "Hello Happy ${1}! | ハローハッピー${1}!"

TIME=$(date)
echo "::set-output name=time::$TIME"

echo "::group:: Some expandable logs"
echo "some stuff"
echo "some stuff"
echo "some stuff"
echo "::endgroup::"
